'use client';
import { useEffect, useRef } from 'react';
import { initializeFirebase, useFirestore } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

const QuizPage = () => {
  const initialized = useRef(false);
  const firestore = useFirestore();

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;
    
    /* ================================= CONFIG ================================= */
    const TELEMETRY_QUEUE_KEY = 'bbc_quiz_telemetry_queue_v1';
    const RETRY_INTERVAL_MS = 10000; // automatic retry every 10s
    
    /* ========================= QUESTIONS (9 narrative) ======================== */
    const QUESTIONS = [
      {
        context: "Vikash built his empire by controlling people and stories. Two men now hold pieces of truth that can unmake him. Rohan Bhatt — India’s leading YouTuber — secretly married his daughter Anya; that secret alone could destroy everything. Dilip Shrivastava — a common man ruined by Vikash — is whispering at the edges.",
        q: "Who does the bad-boy billionaire act against first?",
        choices: [
          { tag: "rohan", txt: "Rohan Bhatt — fame can convert loyalty into exposure.", moral: "master" },
          { tag: "dilip", txt: "Dilip Shrivastava — a common man’s secrets corrode quietly.", moral: "master" },
          { tag: "neither", txt: "Neither — control both and wait for the clearer opening.", moral: "neutral" }
        ]
      },
      {
        context: "Dilip is talking to anyone who listens. He has anger, not proof, but ignoring him is risky.",
        q: "Vikash does not buy silence; he breeds obedience. What is his move against Dilip?",
        choices: [
          { tag: "contain", txt: "Isolate and surveil Dilip until fear quiets him.", moral: "master" },
          { tag: "punish", txt: "Send a warning — escalate the cost of talking to force compliance.", moral: "master" },
          { tag: "erase", txt: "Remove him — silence the source before rumours spread.", moral: "master" }
        ]
      },
      {
        context: "Rohan is loyal but always on camera. One unscripted moment could reveal the hidden marriage or validate suspicion.",
        q: "Rohan’s visibility is a constant risk. How should Vikash handle India’s most-watched man?",
        choices: [
          { tag: "keep", txt: "Keep him visible and scripted — let fame serve control.", moral: "master" },
          { tag: "fade", txt: "Reduce his public appearances to test loyalty without the spotlight.", moral: "neutral" },
          { tag: "erase", txt: "Stage an accident — remove a public liability cleanly.", moral: "master" }
        ]
      },
      {
        context: "At home the fights flare and cool. Anya needs cover; she cannot just walk away. A marriage could hide the strain and protect the image.",
        q: "Vikash needs a social fix fast. Who does Anya realistically marry — and what does that choice mean for power?",
        choices: [
          { tag: "rohan", txt: "Rohan Bhatt — public partner, but can she trust the man who once fled?", moral: "neutral" },
          { tag: "dilip", txt: "Dilip Shrivastava — lower status but nearer and desperate.", moral: "slave" },
          { tag: "vikashpick", txt: "Whoever Vikash picks — an optics solution, not romance.", moral: "master" }
        ]
      },
      {
        context: "Rumours gather traction. A public scandal would ruin reputation and succession plans — Vikash will not confess.",
        q: "Which move stops the immediate leak without admitting fault?",
        choices: [
          { tag: "negotiate", txt: "Bend Dilip into silence and leverage him quietly.", moral: "neutral" },
          { tag: "removeDilip", txt: "Eliminate Dilip — silence the only credible threat.", moral: "master" },
          { tag: "removeRohan", txt: "Remove Rohan — a visible mouth gone quiet calms panic.", moral: "master" }
        ]
      },
      {
        context: "After any big move the household needs a signal that things are under control.",
        q: "To steady the house quickly, which action does Vikash take that directly involves Rohan, Dilip, or Anya?",
        choices: [
          { tag: "tighten", txt: "Tighten the leash on Rohan and Dilip — more limits, more surveillance.", moral: "master" },
          { tag: "neutralize", txt: "Neutralize Dilip’s credibility — ruin his name and standing.", moral: "master" },
          { tag: "presentAnya", txt: "Present Anya calm and visible — reset the public story.", moral: "slave" }
        ]
      },
      {
        context: "Anya’s secret marriage to Rohan would validate Dilip’s timeline and make his accusations credible.",
        q: "If proof could surface, what does Vikash choose right now to protect the dynasty?",
        choices: [
          { tag: "hideAnya", txt: "Keep Anya invisible — no proof, no scandal.", moral: "master" },
          { tag: "killDilip", txt: "Eliminate Dilip — remove the connector between marriage and accusations.", moral: "master" },
          { tag: "showAnya", txt: "Let Anya appear calm and loyal — use her voice to discredit claims.", moral: "slave" }
        ]
      },
      {
        context: "You’ve seen motives and moves: power, fear, fame and truth in sharp relief.",
        q: "Whose reasoning feels closest to yours — whose mind do you understand best?",
        choices: [
          { tag: "vikash", txt: "Vikash Chandra — preserve power at all costs.", moral: "master" },
          { tag: "anya", txt: "Anya Chandra — safety, love and survival shape choices.", moral: "slave" },
          { tag: "dilip", txt: "Dilip Shrivastava — truth matters even at great cost.", moral: "slave" },
          { tag: "rohan", txt: "Rohan Bhatt — fame is influence; visibility is survival.", moral: "neutral" }
        ]
      },
      {
        context: "Everything balances now: Vikash holds wealth, Rohan holds reach, Dilip holds knowledge, and Anya will follow power.",
        q: "Who, in your judgement, truly wins this game? (Anya will marry the one who holds power.)",
        choices: [
          { tag: "vikashwins", txt: "Vikash Chandra — control adapts and survives.", moral: "master" },
          { tag: "rohanwins", txt: "Rohan Bhatt — reach and platform reshape outcomes.", moral: "neutral" },
          { tag: "dilipwins", txt: "Dilip Shrivastava — truth endures beyond power.", moral: "slave" }
        ]
      }
    ];

    /* ======================= STATE & ELEMENTS ======================= */
    let idx = 0;
    let answers: any[] = [];
    let questionStart = 0;

    const intro = document.getElementById('intro');
    const startBtn = document.getElementById('startBtn');
    const consent = document.getElementById('consentChk');
    const quiz = document.getElementById('quiz');
    const progressEl = document.getElementById('progress');
    const contextLine = document.getElementById('contextLine');
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const backBtn = document.getElementById('backBtn');
    const result = document.getElementById('result');
    const resTitle = document.getElementById('resTitle');
    const resShort = document.getElementById('resShort');
    const resProfile = document.getElementById('resProfile');
    const emblemWrap = document.getElementById('emblemWrap');
    const resBreakdown = document.getElementById('resBreakdown');
    const telemetryStatus = document.getElementById('telemetryStatus');
    const telemetryQueued = document.getElementById('telemetryQueued');
    const telemetryErr = document.getElementById('telemetryErr');
    const retryBtn = document.getElementById('retryBtn');
    const resetBtn = document.getElementById('resetBtn');
    const telemetryLine = document.getElementById('telemetryLine');
    const debugLine = document.getElementById('debugLine');

    if (consent) (consent as HTMLInputElement).addEventListener('change', ()=> (startBtn as HTMLButtonElement).disabled = !(consent as HTMLInputElement).checked);
    if(startBtn) startBtn.addEventListener('click', ()=> {
      if(!(consent as HTMLInputElement).checked){ alert('Please agree to send answers anonymously.'); return; }
      intro.style.display = 'none';
      quiz.style.display = 'block';
      quiz.setAttribute('aria-hidden','false');
      idx = 0; answers = [];
      render();
    });

    /* ========================= RENDER ========================= */
    function render(){
      if(!progressEl || !contextLine || !questionEl || !choicesEl || !backBtn) return;
      if(idx >= QUESTIONS.length) return finish();
      const q = QUESTIONS[idx];
      progressEl.textContent = `Question ${idx+1} of ${QUESTIONS.length}`;
      contextLine.textContent = q.context;
      questionEl.textContent = q.q;
      choicesEl.innerHTML = '';
      backBtn.style.display = idx > 0 ? 'inline-block' : 'none';
      questionStart = Date.now();

      q.choices.forEach(c=>{
        const b = document.createElement('button');
        b.className = 'choice';
        b.textContent = c.txt;
        // restore previously selected highlight:
        if(answers[idx] && (answers[idx] as any).choice === c.txt) b.classList.add('selected');

        b.onclick = ()=>{
          answers[idx] = {
            index: idx+1,
            context: q.context,
            question: q.q,
            choice: c.txt,
            tag: c.tag,
            moral: c.moral,
            timeTakenSec: Math.round((Date.now() - questionStart)/1000)
          };
          idx++;
          setTimeout(render,120);
        };
        choicesEl.appendChild(b);
      });
    }

    if(backBtn) backBtn.onclick = ()=>{
      if(idx>0){ idx--; render(); }
    };

    /* ================== EMBLEMS (small svg functions) ================== */
    function getEagleHTML(){ return `<svg viewBox="0 0 64 64" width="120" height="120" xmlns="http://www.w3.org/2000/svg"><g fill="url(#goldG)"><path d="M32 4c-2 4-6 8-10 10 6 0 12 2 12 2s6-2 12-2c-4-2-8-6-10-10zM8 44c4-8 20-12 24-12s20 4 24 12c-8-6-20-8-24-8s-16 2-24 8z"/><path d="M10 52c2-8 10-12 22-12s20 4 22 12H10z"/></g></svg>`; }
    function getOliveHTML(){ return `<svg viewBox="0 0 64 64" width="120" height="120" xmlns="http://www.w3.org/2000/svg"><g stroke="url(#tealG)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 44c8-8 18-10 24-8 6 2 12 8 24 8"/><path d="M12 36c8-8 18-14 24-12 6 2 6 6 12 10"/><path d="M20 28c6-6 12-10 20-8"/><path d="M32 56c2-6 6-8 10-10"/></g></svg>`; }
    function getScalesHTML(){ return `<svg viewBox="0 0 64 64" width="120" height="120" xmlns="http://www.w3.org/2000/svg"><g stroke="url(#splitG)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6v10"/><path d="M16 20l32 0"/><path d="M20 24l-4 18"/><path d="M44 24l4 18"/><path d="M12 46h16"/><path d="M36 46h16"/></g></svg>`; }

    /* ==================== FINISH & PERSONA ==================== */
    function finish(){
      if(!quiz || !result || !resTitle || !resShort || !resProfile || !resBreakdown || !emblemWrap || !telemetryStatus || !telemetryErr) return;
      
      quiz.style.display = 'none';
      quiz.setAttribute('aria-hidden','true');
      result.style.display = 'block';
      result.setAttribute('aria-hidden','false');

      // tally
      let master = 0, slave = 0, neutral = 0;
      answers.forEach(a => { if((a as any).moral==='master') master++; else if((a as any).moral==='slave') slave++; else neutral++; });
      const total = master+slave+neutral || 1;
      const mPct = Math.round(master/total*100), sPct = Math.round(slave/total*100);

      // persona
      let persona='', shortLine='', profile='', emblemHTML='';
      if(mPct>=60 && mPct > sPct){
        persona = 'Master Morality — Power-First';
        shortLine = 'You favour decisive strength, hierarchy and ruthless pragmatism.';
        profile = `<p><strong>The Calculating Noble:</strong> You think like a ruler. Problems are instruments to be used, not complaints to be indulged. You prize clarity: who stands in the way is either an ally or an obstacle that must be neutralised. In crises you want fast, clean outcomes; you value competence and loyalty over pity.</p>
        <p><strong>The Moral Logic of Strength:</strong> Your ethics are forged in consequence. You read power as truth — the strong make rules; the weak explain themselves.</p>`;
        emblemHTML = getEagleHTML();
      } else if(sPct>=60 && sPct > mPct){
        persona = 'Slave Morality — Weak-First';
        shortLine = 'You value protection, truth, and the wellbeing of the vulnerable.';
        profile = `<p><strong>The Compassionate Judge:</strong> You approach choices through empathy and the language of harm. You trust that exposing truth and defending the vulnerable corrects power’s excesses.</p>
        <p><strong>The Moral Logic of the Weak:</strong> Your ethics prize equality and accountability.</p>`;
        emblemHTML = getOliveHTML();
      } else {
        persona = 'Hybrid / Strategic Observer';
        shortLine = 'You balance strength with sympathy; you choose when to wield power and when to protect.';
        profile = `<p><strong>The Strategic Synthesizer:</strong> You recognise both logics: the necessity of decisive action and the ethical weight of protecting the weak.</p>
        <p><strong>The Moral Logic of Balance:</strong> Your morality is provisional and pragmatic — you use ideas as tools.</p>`;
        emblemHTML = getScalesHTML();
      }

      // show textual results
      resTitle.textContent = persona;
      resShort.textContent = shortLine;
      resProfile.innerHTML = profile;
      resBreakdown.innerHTML = `Breakdown: Master choices: ${master} (${mPct}%) • Slave choices: ${slave} (${sPct}%) • Neutral: ${neutral}.`;

      // inject gradients + emblem
      addGradients();
      emblemWrap.innerHTML = emblemHTML;

      // telemetry payload + send
      const payload = { timestamp: new Date().toISOString(), answers, persona, breakdown:{master,slave,neutral} };
      telemetryStatus.textContent = 'sending…';
      telemetryErr.style.display = 'none';
      sendOrQueueTelemetry(payload).then(ok=>{
        if(ok){
          telemetryStatus.textContent = 'sent';
          if(telemetryQueued) telemetryQueued.style.display = 'none';
          (telemetryStatus as HTMLElement).style.color = '#9adbcf';
        } else {
          telemetryStatus.textContent = 'failed';
          (telemetryStatus as HTMLElement).style.color = 'var(--danger)';
          // queued count will display via refreshQueueUI()
        }
      });
    }

    /* ================== GRADIENT DEFs for SVG emblems ================== */
    function addGradients(){
      if(document.getElementById('bbc-grad-defs')) return;
      const n = document.createElement('div');
      n.style.position='absolute'; n.style.left='-9999px'; n.style.top='-9999px';
      n.id='bbc-grad-defs';
      n.innerHTML = `<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg"><defs>
        <linearGradient id="goldG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${getComputedStyle(document.documentElement).getPropertyValue('--gold') || '#ffd98a'}"/><stop offset="1" stop-color="#F3DFA8"/></linearGradient>
        <linearGradient id="tealG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${getComputedStyle(document.documentElement).getPropertyValue('--teal') || '#80e4d8'}"/><stop offset="1" stop-color="#BFF0DF"/></linearGradient>
        <linearGradient id="splitG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${getComputedStyle(document.documentElement).getPropertyValue('--gold') || '#ffd98a'}"/><stop offset="1" stop-color="${getComputedStyle(document.documentElement).getPropertyValue('--teal') || '#80e4d8'}"/></linearGradient>
      </defs></svg>`;
      document.body.appendChild(n);
    }

    /* ===================== TELEMETRY (queue + retry) ===================== */
    async function sendOrQueueTelemetry(payload: any){
      try {
        const ok = await trySend(payload);
        if(ok) {
          return true;
        } else {
          enqueue(payload, 'failed-send');
          return false;
        }
      } catch(e: any){
        enqueue(payload, e.message || 'error');
        return false;
      } finally {
        refreshQueueUI();
      }
    }

    async function trySend(payload: any) {
      if (!firestore) {
        if (telemetryErr) {
          telemetryErr.style.display = 'block';
          telemetryErr.textContent = 'Firestore not available.';
        }
        return false;
      }
      try {
        await addDoc(collection(firestore, 'quiz_submissions'), payload);
        return true;
      } catch (err: any) {
        if (telemetryErr) {
          telemetryErr.style.display = 'block';
          telemetryErr.textContent = `Firestore error: ${err.message || 'Unknown error'}`;
        }
        return false;
      }
    }

    function enqueue(payload: any, reason: string){
      const q = readQueue();
      q.push({ id: Date.now() + '-' + Math.random().toString(36).slice(2,8), payload, reason, added: new Date().toISOString() });
      try { localStorage.setItem(TELEMETRY_QUEUE_KEY, JSON.stringify(q)); } catch(e){}
      refreshQueueUI();
    }

    function readQueue(): any[] {
      try {
        const raw = localStorage.getItem(TELEMETRY_QUEUE_KEY);
        if(!raw) return [];
        return JSON.parse(raw) || [];
      } catch(e){ return []; }
    }

    function setQueue(q: any[]){
      try{ localStorage.setItem(TELEMETRY_QUEUE_KEY, JSON.stringify(q)); }catch(e){}
      refreshQueueUI();
    }

    function refreshQueueUI(){
      if (!telemetryQueued || !retryBtn) return;
      const q = readQueue();
      if(q.length>0){
        telemetryQueued.style.display='inline-block';
        telemetryQueued.textContent = `Queued: ${q.length}`;
        retryBtn.style.display = 'inline-block';
      } else {
        telemetryQueued.style.display='none';
        retryBtn.style.display = 'none';
      }
    }

    async function flushOne(){
      const q = readQueue();
      if(q.length===0) return true;
      const item = q[0];
      const ok = await trySend(item.payload);
      if(ok){
        q.shift();
        setQueue(q);
        return true;
      }
      (item as any).reason = 'retry-failed';
      setQueue(q);
      return false;
    }

    let flushTimer: NodeJS.Timeout | null = null;
    async function flushLoop(){
      try {
        let anySent = false;
        for(let n=0;n<3;n++){
          const q = readQueue();
          if(q.length===0) break;
          const ok = await flushOne();
          if(ok) anySent = true;
          else break; 
        }
        if(anySent && telemetryStatus) telemetryStatus.textContent = 'sent (queued flushed)';
      } catch(e){
        console.warn('flushLoop error', e);
      } finally {
        refreshQueueUI();
        if(flushTimer) clearTimeout(flushTimer);
        flushTimer = setTimeout(flushLoop, RETRY_INTERVAL_MS);
      }
    }

    window.addEventListener('online', ()=> { flushLoop(); });

    if(retryBtn) retryBtn.addEventListener('click', ()=> {
      if(telemetryErr) telemetryErr.style.display = 'none';
      if(telemetryStatus) telemetryStatus.textContent = 'retrying…';
      flushLoop();
    });

    setTimeout(flushLoop, 1200);

    async function sendTelemetry(payload: any){
      const ok = await sendOrQueueTelemetry(payload);
      refreshQueueUI();
      return ok;
    }

    refreshQueueUI();

    if(resetBtn) resetBtn.addEventListener('click', ()=> {
      idx = 0; answers = []; questionStart = 0;
      if (result) result.style.display = 'none';
      if (quiz) quiz.style.display = 'none';
      if (intro) intro.style.display = 'block';
      if (telemetryStatus) telemetryStatus.textContent = 'pending';
      if (telemetryErr) telemetryErr.style.display = 'none';
      if (telemetryStatus) (telemetryStatus as HTMLElement).style.color = '';
      refreshQueueUI();
      if (emblemWrap) emblemWrap.innerHTML = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const consentChk = document.getElementById('consentChk') as HTMLInputElement;
      if(consentChk) consentChk.checked = false;
      const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
      if(startBtn) startBtn.disabled = true;
      if (debugLine) debugLine.textContent = '';
    });

    document.addEventListener('visibilitychange', ()=> {
      if(document.visibilityState === 'visible') flushLoop();
    });

    function showDebug(msg: string){
      if(!debugLine) return;
      debugLine.textContent = msg;
    }

    refreshQueueUI();

  }, [firestore]);

  const quizStyles = `
    :root{
      --bg1:#03050b; --bg2:#0b1220;
      --card:#0f1b2b; --card-contrast:rgba(255,255,255,0.10);
      --gold:#ffd98a; --gold-strong:#C9A25A;
      --teal:#80e4d8; --text:#f6f7f8; --muted:#bcd7d1;
      --danger:#f07a7a;
    }
    *{box-sizing:border-box}
    .wrap{max-width:820px;margin:0 auto;padding:18px;}
    .header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;}
    .title{font-family:'Playfair Display', Georgia, serif;color:var(--gold);font-size:1.5rem;margin:0;}
    .tagline{color:var(--teal);font-style:italic;font-size:0.95rem;}
    .panel{background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));border-radius:14px;padding:16px;margin-bottom:14px;border:1px solid var(--card-contrast);box-shadow:0 8px 30px rgba(0,0,0,0.6);}
    .context{color:var(--text);font-size:1rem;line-height:1.6;}
    .controls{display:flex;gap:12px;align-items:center;margin-top:12px;flex-wrap:wrap;}
    .consent{font-size:0.95rem;color:var(--muted);display:flex;align-items:center;gap:8px;}
    .start-btn{background:linear-gradient(90deg,var(--gold),#fff3b8);color:#07131e;padding:12px 16px;border-radius:12px;border:none;font-weight:700;cursor:pointer;font-size:1rem;}
    .start-btn[disabled]{opacity:0.6;cursor:not-allowed;}
    .quiz{display:none;}
    .progress{text-align:center;color:var(--teal);font-size:0.95rem;margin-bottom:10px;}
    .card{background:var(--card);border-radius:12px;padding:14px;border:1px solid var(--card-contrast);box-shadow:0 6px 20px rgba(0,0,0,0.6);}
    .context-line{color:#dfeee6;font-size:0.95rem;margin-bottom:10px;}
    .question{color:var(--gold-strong);font-weight:700;font-size:1.05rem;margin-bottom:12px;line-height:1.4;}
    .choices{display:flex;flex-direction:column;gap:12px;}
    .choice{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);color:var(--text);padding:14px;border-radius:10px;text-align:left;font-size:1rem;cursor:pointer;}
    .choice:active{transform:translateY(1px);}
    .choice:hover{background:rgba(255,255,255,0.06);}
    .choice.selected{border-color:var(--teal);background:rgba(128,228,216,0.06);}
    .back-row{display:flex;justify-content:flex-start;margin-top:12px;}
    .back-btn{background:transparent;border:1px solid rgba(255,255,255,0.12);color:var(--muted);padding:10px 12px;border-radius:10px;cursor:pointer;}
    .result{display:none;margin-top:16px;padding:16px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border:1px solid var(--card-contrast);box-shadow:0 8px 24px rgba(0,0,0,0.6);}
    .result h2{color:var(--gold-strong);margin:0 0 6px 0;font-size:1.2rem;}
    .result .short{color:var(--teal);font-weight:700;margin-bottom:8px;}
    .profile{color:#e7f7f1;line-height:1.6;margin-top:8px;font-size:0.98rem;}
    .breakdown{margin-top:12px;color:var(--teal);font-weight:600;font-size:0.95rem;}
    .emblem-wrap{display:flex;justify-content:center;margin-top:12px;}
    .telemetry{margin-top:12px;font-size:0.95rem;color:var(--muted);display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
    .telemetry .status{font-weight:700;}
    .telemetry .queued{background:rgba(255,255,255,0.03);padding:6px 8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);color:var(--muted);}
    .telemetry .retrybtn{padding:8px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);background:transparent;color:var(--muted);cursor:pointer;}
    .telemetry .err{display:block;color:var(--danger);font-size:0.88rem;margin-top:6px;white-space:pre-wrap;}
    .cta-row{margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;}
    .cta{display:inline-block;background:linear-gradient(90deg,var(--gold),#fff3b8);color:#07131e;padding:10px 14px;border-radius:8px;text-decoration:none;font-weight:700;}
    .reset-btn{background:transparent;border:1px solid rgba(255,255,255,0.08);color:var(--muted);padding:10px 12px;border-radius:8px;cursor:pointer;}
    .footer{margin-top:18px;text-align:center;color:#9aa6a0;font-size:0.95rem;}
    .small-debug{font-size:0.82rem;color:#9aa6a0;margin-top:8px;}

    @media (max-width:420px){
      .wrap{padding:12px;}
      .title{font-size:1.25rem;}
      .question{font-size:1rem;}
      .choice{padding:12px;font-size:0.98rem;}
      .start-btn{padding:12px;width:100%;}
    }
  `;

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: quizStyles }} />
      <div className="wrap" role="main" aria-live="polite">
        <div className="header">
          <div>
            <div className="title">Two Lives. One Will Be Eliminated.</div>
            <div className="tagline">A game-theory experiment — for readers who love game theory.</div>
          </div>
          <div aria-hidden="true" style={{width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <svg viewBox="0 0 64 64" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#C9A25A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M32 6c-4 4-10 4-14 10 6 0 12 2 12 2s6-2 12-2c-4-6-10-6-10-10z"/><path d="M10 44c8-8 20-10 22-10s14 2 22 10"/><path d="M18 52c2-8 10-12 22-12s20 4 22 12H18z"/></g></svg>
          </div>
        </div>

        <section id="intro" className="panel" aria-labelledby="introTitle">
          <div id="introTitle" style={{fontWeight: 700, marginBottom: '8px', color: 'var(--gold-strong)'}}>Quick context — 30 seconds</div>
          <div className="context">
            <strong>Vikash Chandra</strong> — the bad-boy billionaire who controls image, marriages, and secrets.<br />
            <strong>Anya</strong> — his daughter, once a film face, now hidden; her word can validate or destroy him.<br />
            <strong>Rohan Bhatt</strong> — India’s leading YouTuber, secretly married to Anya; his reach can amplify scandal.<br />
            <strong>Dilip Shrivastava</strong> — a common man who knows dangerous things and has grievances.<br /><br />
            This is a short, narrative game-theory quiz: nine scene-like choices that map how you think about power, truth, and survival. The result shows a Nietzsche-inspired personality (Master / Slave / Hybrid).
          </div>

          <div className="controls">
            <label className="consent"><input id="consentChk" type="checkbox" /> I agree to send my answers anonymously for research.</label>
            <button id="startBtn" className="start-btn" disabled>▶ Start Quiz</button>
          </div>
        </section>

        <section id="quiz" className="quiz" aria-live="polite" aria-hidden="true">
          <div id="progress" className="progress">Question 1 of 9</div>

          <div className="card" role="region" aria-label="Question card">
            <div id="contextLine" className="context-line"></div>
            <div id="question" className="question"></div>
            <div id="choices" className="choices" role="list"></div>

            <div className="back-row">
              <button id="backBtn" className="back-btn" style={{display: 'none'}}>⬅ Back</button>
            </div>
          </div>
        </section>

        <section id="result" className="result" role="status" aria-live="polite" aria-hidden="true">
          <h2 id="resTitle"></h2>
          <div id="resShort" className="short"></div>
          <div id="resProfile" className="profile"></div>

          <div className="emblem-wrap" id="emblemWrap" aria-hidden="true"></div>

          <div id="resBreakdown" className="breakdown"></div>

          <div className="telemetry" id="telemetryLine">
            Telemetry: <span id="telemetryStatus" className="status">pending</span>
            <span id="telemetryQueued" className="queued" style={{display: 'none'}}>Queued: 0</span>
            <button id="retryBtn" className="retrybtn" style={{display: 'none'}}>Retry telemetry</button>
            <div id="telemetryErr" className="err" style={{display: 'none'}}></div>
          </div>

          <div className="cta-row">
            <a id="readLink" className="cta" href="https://www.thebbc.shop/chapters" target="_blank" rel="noopener">Read the story free</a>
            <button id="resetBtn" className="reset-btn">Take Again</button>
          </div>
        </section>

        <div className="footer">“The strong do what they can and the weak suffer what they must.” — Thucydides</div>
        <div className="small-debug" id="debugLine" aria-hidden="true"></div>
      </div>
    </div>
  );
};

// As this page now relies on a client-side hook `useFirestore`, we need a parent component
// to provide the Firebase context. We can create a simple wrapper for that.
import { FirebaseClientProvider } from '@/firebase';

export default function QuizPageWrapper() {
  return (
    <FirebaseClientProvider>
      <QuizPage />
    </FirebaseClientProvider>
  );
}
