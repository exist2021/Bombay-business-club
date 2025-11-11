'use client';

import { useEffect, useRef } from 'react';

const QuizPage = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;
    
    /* ================= CONFIG ================= */
    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyYvmDRXjeDqJmk4MyWVfv6evhRkE-zA44-lMfOHXXt9veH4Sygmo1UzfNajZNauPiNIQ/exec";

    /* ================ QUESTIONS (full narrative 9) ================ */
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

    /* ================= STATE & ELEMENTS ================= */
    let idx = 0, answers: any[] = [], questionStart = 0;
    const intro=document.getElementById('intro'),
          startBtn=document.getElementById('startBtn'),
          consent=document.getElementById('consentChk'),
          quiz=document.getElementById('quiz'),
          progress=document.getElementById('progress'),
          contextLine=document.getElementById('contextLine'),
          questionEl=document.getElementById('question'),
          choicesEl=document.getElementById('choices'),
          backBtn=document.getElementById('backBtn'),
          result=document.getElementById('result'),
          resTitle=document.getElementById('resTitle'),
          resShort=document.getElementById('resShort'),
          resProfile=document.getElementById('resProfile'),
          resBreakdown=document.getElementById('resBreakdown'),
          emblemWrap=document.getElementById('emblemWrap'),
          telemetryLine=document.getElementById('telemetryLine'),
          telemetryStatus=document.getElementById('telemetryStatus'),
          resetBtn=document.getElementById('resetBtn');

    if(consent) (consent as HTMLInputElement).addEventListener('change', ()=> (startBtn as HTMLButtonElement).disabled = !(consent as HTMLInputElement).checked);
    if(startBtn) startBtn.addEventListener('click', ()=> {
      if(!(consent as HTMLInputElement).checked){ alert('Please agree to send answers anonymously to continue.'); return; }
      if(intro) intro.style.display = 'none';
      if(quiz) quiz.style.display = 'block';
      idx = 0; answers = [];
      render();
    });

    /* ================= RENDER (question card + back) ================= */
    function render(){
      if(idx >= QUESTIONS.length) return finish();
      const q = QUESTIONS[idx];
      if (progress) progress.textContent = `Question ${idx+1} of ${QUESTIONS.length}`;
      if (contextLine) contextLine.textContent = q.context;
      if (questionEl) questionEl.textContent = q.q;
      if (choicesEl) choicesEl.innerHTML = '';
      if (backBtn) backBtn.style.display = idx>0 ? 'inline-block' : 'none';
      questionStart = Date.now();

      q.choices.forEach((c: any)=>{
        const b=document.createElement('button');
        b.className = 'choice';
        b.textContent = c.txt;

        // restore highlight if previously chosen
        if(answers[idx] && (answers[idx] as any).choice === c.txt){
          b.classList.add('selected');
        }

        b.onclick = ()=>{
          answers[idx] = {
            index: idx+1,
            context: q.context,
            question: q.q,
            choice: c.txt,
            tag: c.tag,
            moral: c.moral,
            timeTakenSec: Math.round((Date.now() - questionStart) / 1000)
          };
          idx++;
          setTimeout(render, 120);
        };
        if (choicesEl) choicesEl.appendChild(b);
      });

      if (backBtn) backBtn.onclick = ()=>{
        if(idx > 0){
          idx--;
          render();
        }
      };
    }

    /* ================= EMBLEMS (SVG Option A) ================= */
    function createEagleSVG(){ return `<svg viewBox="0 0 64 64" width="140" height="140" xmlns="http://www.w3.org/2000/svg"><g fill="url(#goldGrad)"><path d="M32 4c-2 4-6 8-10 10 6 0 12 2 12 2s6-2 12-2c-4-2-8-6-10-10zM8 44c4-8 20-12 24-12s20 4 24 12c-8-6-20-8-24-8s-16 2-24 8z"/><path d="M10 52c2-8 10-12 22-12s20 4 22 12H10z"/></g></svg>`; }
    function createOliveSVG(){ return `<svg viewBox="0 0 64 64" width="140" height="140" xmlns="http://www.w3.org/2000/svg"><g stroke="url(#tealGrad)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 44c8-8 18-10 24-8 6 2 12 8 24 8"/><path d="M12 36c8-8 18-14 24-12 6 2 6 6 12 10"/><path d="M20 28c6-6 12-10 20-8"/><path d="M32 56c2-6 6-8 10-10"/></g></svg>`; }
    function createScalesSVG(){ return `<svg viewBox="0 0 64 64" width="140" height="140" xmlns="http://www.w3.org/2000/svg"><g stroke="url(#splitGrad)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6v10"/><path d="M16 20l32 0"/><path d="M20 24l-4 18"/><path d="M44 24l4 18"/><path d="M12 46h16"/><path d="M36 46h16"/></g></svg>`; }

    /* ================= FINISH: compute persona, show profile + emblem, telemetry ================ */
    function finish(){
      if (quiz) quiz.style.display = 'none';
      if (result) result.style.display = 'block';

      // tally
      let master = 0, slave = 0, neutral = 0;
      answers.forEach((a: any) => {
        if(a.moral === 'master') master++;
        else if(a.moral === 'slave') slave++;
        else neutral++;
      });
      const total = master + slave + neutral || 1;
      const masterPct = Math.round((master/total)*100);
      const slavePct = Math.round((slave/total)*100);

      // persona selection + profile text
      let persona = '', shortLine = '', profileText = '', emblemHTML = '';
      if(masterPct >= 60 && masterPct > slavePct){
        persona = 'Master Morality — Power-First';
        shortLine = 'You favour decisive strength, hierarchy and ruthless pragmatism.';
        profileText = `<p><strong>Paragraph 1 — The Calculating Noble:</strong> You think like a ruler. Problems are instruments to be used, not complaints to be indulged. You prize clarity: who stands in the way is either an ally or an obstacle that must be neutralised. In crises you want fast, clean outcomes; you value competence and loyalty over pity. That instinct makes you an efficient strategist in a world of scarce time and brittle reputations.</p>
        <p><strong>Paragraph 2 — The Moral Logic of Strength:</strong> Your ethics are forged in consequence. You read power as truth — the strong make rules; the weak explain themselves. This gives you courage and cold judgment, but it can also blind you to suffering that doesn’t immediately threaten your objectives. In a family like the Chandras, your decisions privilege succession and control above sentiment.</p>`;
        emblemHTML = createEagleSVG();
      } else if(slavePct >= 60 && slavePct > masterPct){
        persona = 'Slave Morality — Weak-First';
        shortLine = 'You value protection, truth, and the wellbeing of the vulnerable.';
        profileText = `<p><strong>Paragraph 1 — The Compassionate Judge:</strong> You approach choices through empathy and the language of harm. You trust that exposing truth and defending the vulnerable corrects power’s excesses. You favour methods that repair — dialogue, naming injustice, shoring up damaged lives — even when those methods are slower or risk your own comfort.</p>
        <p><strong>Paragraph 2 — The Moral Logic of the Weak:</strong> Your ethics prize equality and accountability. You see reputation as a fragile mask that must be stripped when harm is done. That impulse makes you a moral anchor in chaotic houses like the Chandras’, though it can occasionally lead you to underestimate the cold calculus of those who hold power.</p>`;
        emblemHTML = createOliveSVG();
      } else {
        persona = 'Hybrid / Strategic Observer';
        shortLine = 'You balance strength with sympathy; you choose when to wield power and when to protect.';
        profileText = `<p><strong>Paragraph 1 — The Strategic Synthesizer:</strong> You recognise both logics: the necessity of decisive action and the ethical weight of protecting the weak. You read situations contextually — sometimes the ruler must act, sometimes truth must be spoken aloud. This flexibility makes you particularly valuable: you can both plan for survival and preserve what remains humane in crisis.</p>
        <p><strong>Paragraph 2 — The Moral Logic of Balance:</strong> You are mistrustful of absolutist answers. Your morality is provisional and pragmatic — a toolkit for messy realities. That means you rarely romanticise either power or victimhood; you use both concepts to solve problems rather than to argue ideology.</p>`;
        emblemHTML = createScalesSVG();
      }

      // show results text
      if (resTitle) resTitle.textContent = persona;
      if (resShort) resShort.textContent = shortLine;
      if (resProfile) resProfile.innerHTML = profileText;
      if (resBreakdown) resBreakdown.innerHTML = `<strong>Breakdown:</strong> Master choices: ${master} (${masterPct}%) • Slave choices: ${slave} (${slavePct}%) • Neutral: ${neutral}.`;

      // render emblem with gradients (inject SVG with defs)
      if (emblemWrap) emblemWrap.innerHTML = emblemHTML;
      // add defs to the emblemWrap to ensure gradients available
      const defs = document.createElement('svg');
      defs.setAttribute('width','0'); defs.setAttribute('height','0'); defs.setAttribute('style','position:absolute;left:-9999px;top:-9999px;');
      defs.innerHTML = `<defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${window.getComputedStyle(document.documentElement).getPropertyValue('--gold') || '#ffd98a'}"/><stop offset="1" stop-color="#F3DFA8"/></linearGradient>
        <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${window.getComputedStyle(document.documentElement).getPropertyValue('--teal') || '#80e4d8'}"/><stop offset="1" stop-color="#BFF0DF"/></linearGradient>
        <linearGradient id="splitGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${window.getComputedStyle(document.documentElement).getPropertyValue('--gold') || '#ffd98a'}"/><stop offset="1" stop-color="${window.getComputedStyle(document.documentElement).getPropertyValue('--teal') || '#80e4d8'}"/></linearGradient>
      </defs>`;
      document.body.appendChild(defs);

      // telemetry: send payload and update status UI
      if (telemetryStatus) {
        telemetryStatus.textContent = 'sending…';
        telemetryStatus.style.color = '#ffd28a';
      }
      sendTelemetry({ timestamp: new Date().toISOString(), answers, persona, breakdown: { master, slave, neutral } })
        .then(ok => {
          if(telemetryStatus) {
            if(ok){ telemetryStatus.textContent = 'sent'; telemetryStatus.style.color = '#9adbcf'; }
            else { telemetryStatus.textContent = 'failed'; telemetryStatus.style.color = '#f39c9c'; showRetry(true); }
          }
        }).catch(e => { 
          if(telemetryStatus) {
            telemetryStatus.textContent = 'failed'; telemetryStatus.style.color = '#f39c9c'; showRetry(true); 
          }
        });
    }

    /* ================= TELEMETRY with retry UI ================= */
    function createRetryButton(){
      const btn = document.createElement('button');
      btn.textContent = 'Retry telemetry';
      btn.className = 'retry';
      btn.style.display = 'none';
      btn.onclick = async ()=>{
        if (telemetryStatus) {
            telemetryStatus.textContent = 'retrying…';
            telemetryStatus.style.color = '#ffd28a';
        }
        try{
          const payload = { timestamp: new Date().toISOString(), answers, persona: (document.getElementById('resTitle') as HTMLElement).textContent };
          const ok = await sendTelemetry(payload);
          if(telemetryStatus) {
            if(ok){ telemetryStatus.textContent = 'sent'; telemetryStatus.style.color = '#9adbcf'; showRetry(false); }
            else { telemetryStatus.textContent = 'failed'; telemetryStatus.style.color = '#f39c9c'; showRetry(true); }
          }
        }catch(e){
            if (telemetryStatus) {
                telemetryStatus.textContent = 'failed';
                telemetryStatus.style.color = '#f39c9c';
                showRetry(true);
            }
        }
      };
      btn.id = 'retryBtn';
      return btn;
    }
    function showRetry(show: boolean){
      let btn = document.getElementById('retryBtn');
      if(!btn && telemetryLine){
        const created = createRetryButton();
        telemetryLine.appendChild(created);
        btn = document.getElementById('retryBtn');
      }
      if (btn) btn.style.display = show ? 'inline-block' : 'none';
    }

    /* send telemetry with one automatic retry attempt for transient issues */
    async function sendTelemetry(payload: any){
      try {
        const res = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if(res.ok) return true;
        // quick automatic retry once
        await new Promise(r => setTimeout(r, 400));
        const res2 = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        return res2.ok;
      } catch(err){
        console.warn('Telemetry error', err);
        return false;
      }
    }

    /* ================= RESET / INTERACTIONS ================= */
    if (resetBtn) resetBtn.addEventListener('click', ()=> {
      idx = 0; answers = []; questionStart = 0;
      if (result) result.style.display = 'none';
      if (intro) intro.style.display = 'block';
      if (quiz) quiz.style.display = 'none';
      if (telemetryStatus) {
        telemetryStatus.textContent = 'pending';
        telemetryStatus.style.color = '';
      }
      showRetry(false);
      if (emblemWrap) emblemWrap.innerHTML = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (consent) (consent as HTMLInputElement).checked = false;
      if (startBtn) (startBtn as HTMLButtonElement).disabled = true;
    });

  }, []);

  const quizStyles = `
    :root{
      --bg1:#050615; --bg2:#0b1220;
      --panel:rgba(255,255,255,0.10);
      --gold:#ffd98a; --gold-dark:#C9A25A;
      --teal:#80e4d8; --text:#f8f9fb; --muted:#cfd6da;
      --glass-border:rgba(255,255,255,0.10);
    }
    html,body{height:100%;margin:0;background:linear-gradient(180deg,var(--bg1),var(--bg2));color:var(--text);font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, Georgia, serif;line-height:1.6;-webkit-font-smoothing:antialiased;}
    .wrap{max-width:900px;margin:0 auto;padding:18px;box-sizing:border-box;}
    .header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;}
    .title{font-family:'Playfair Display', Georgia, serif;color:var(--gold);font-size:1.6rem;margin:0;}
    .tagline{color:var(--teal);font-style:italic;}
    .panel{background:var(--panel);border-radius:14px;padding:16px;margin-bottom:14px;box-shadow:0 0 8px rgba(255,255,255,0.06) inset, 0 6px 20px rgba(0,0,0,0.5);border:1px solid var(--glass-border);}
    .context{color:var(--text);font-size:0.98rem;}
    .controls{margin-top:12px;display:flex;gap:12px;align-items:center;}
    label.consent{font-size:0.95rem;color:var(--muted);}
    .start-btn{background:linear-gradient(90deg,var(--gold),#fff2b0);color:#07131e;padding:12px 16px;border-radius:10px;border:none;font-weight:700;cursor:pointer;width:180px;}
    .start-btn[disabled]{opacity:0.6;cursor:not-allowed;}
    .quiz{display:none;}
    .progress{text-align:center;color:var(--teal);font-size:0.95rem;margin-bottom:10px;}
    .card{background:var(--panel);border-radius:12px;padding:16px;border:1px solid var(--glass-border);box-shadow:0 2px 10px rgba(0,0,0,0.45);}
    .context-line{color:#dfeee6;font-size:0.95rem;margin-bottom:10px;}
    .question{color:var(--gold-dark);font-weight:700;font-size:1.05rem;margin-bottom:12px;line-height:1.4;}
    .choices{display:flex;flex-direction:column;gap:10px;}
    .choice{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);color:var(--text);padding:14px;border-radius:10px;text-align:left;font-size:0.98rem;cursor:pointer;}
    .choice:hover{background:rgba(255,255,255,0.12);transform:translateX(4px);transition:transform .12s;}
    .choice.selected{border-color:var(--teal);background:rgba(128,228,216,0.08);}
    .back-row{display:flex;justify-content:flex-start;margin-top:12px;}
    .back-btn{background:transparent;border:1px solid rgba(255,255,255,0.12);color:var(--muted);padding:10px 12px;border-radius:10px;cursor:pointer;}
    .back-btn:hover{background:rgba(255,255,255,0.03);}
    .result{display:none;margin-top:16px;padding:18px;border-radius:14px;background:var(--panel);border:1px solid var(--glass-border);box-shadow:0 6px 20px rgba(0,0,0,0.45);}
    .result h2{color:var(--gold-dark);margin:0 0 8px 0;}
    .result .short{color:var(--teal);font-weight:700;margin-bottom:8px;}
    .profile{color:#e7f7f1;line-height:1.6;margin-top:8px;}
    .breakdown{margin-top:12px;color:#bfe7d9;font-weight:600;}
    .emblem-wrap{display:flex;justify-content:center;margin-top:16px;}
    .telemetry{margin-top:12px;font-size:0.95rem;color:var(--muted);}
    .telemetry .status{font-weight:700;margin-left:8px;}
    .telemetry .retry{margin-left:12px;padding:6px 8px;border-radius:8px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:var(--muted);cursor:pointer;}
    .cta-row{margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;}
    .cta{display:inline-block;background:linear-gradient(90deg,var(--gold),#fff2b0);color:#07131e;padding:10px 14px;border-radius:8px;text-decoration:none;font-weight:700;}
    .reset-btn{background:transparent;border:1px solid rgba(255,255,255,0.08);color:var(--muted);padding:10px 12px;border-radius:8px;cursor:pointer;}
    .footer{margin-top:18px;text-align:center;color:#9aa6a0;font-size:0.92rem;}
    @media (max-width:640px){
      .wrap{padding:12px;}
      .title{font-size:1.3rem;}
      .question{font-size:1rem;}
      .choice{padding:12px;font-size:0.95rem;}
      .start-btn{width:100%;}
      .card{padding:14px;}
    }
  `;

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: quizStyles }} />
      <div className="wrap" role="main">
        <div className="header">
          <div>
            <div className="title">Two Lives. One Will Be Eliminated.</div>
            <div className="tagline">A game-theory experiment — for readers who love game theory.</div>
          </div>
          <div aria-hidden="true" style={{width:"56px",height:"56px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg viewBox="0 0 64 64" width="42" height="42" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{color:"rgba(201,162,90,0.9)"}}><path d="M32 6c-4 4-10 4-14 10 6 0 12 2 12 2s6-2 12-2c-4-6-10-6-10-10z"/><path d="M10 44c8-8 20-10 22-10s14 2 22 10"/><path d="M18 52c2-8 10-12 22-12s20 4 22 12H18z"/></g></svg>
          </div>
        </div>

        <div id="intro" className="panel" aria-labelledby="introTitle">
          <div id="introTitle" style={{fontWeight:700,marginBottom:"8px",color:"var(--gold-dark)"}}>Quick context (read once — 30 seconds)</div>
          <div className="context">
            <strong>Vikash Chandra</strong> — the bad-boy billionaire who controls image, marriages, and secrets.<br/>
            <strong>Anya</strong> — his daughter, once a film face, now kept out of public view; her word can validate or destroy him.<br/>
            <strong>Rohan Bhatt</strong> — India’s leading YouTuber, <strong>secretly married to Anya</strong>; his reach can amplify any scandal.<br/>
            <strong>Dilip Shrivastava</strong> — a common man with dangerous knowledge and grievances.<br/><br/>
            This quiz is a short, narrative game-theory experiment: nine scene-like choices that map how you weigh power, survival and truth. You’ll get a Nietzsche-inspired personality result (Master / Slave / Hybrid).
          </div>

          <div className="controls">
            <label className="consent"><input id="consentChk" type="checkbox"/> I agree to send my answers anonymously for research.</label>
            <button id="startBtn" className="start-btn" disabled>▶ Start Quiz</button>
          </div>
        </div>

        <div id="quiz" className="quiz" aria-live="polite">
          <div id="progress" className="progress">Question 1 of 9</div>

          <div className="card" role="region" aria-label="Question card">
            <div id="contextLine" className="context-line"></div>
            <div id="question" className="question"></div>
            <div id="choices" className="choices" role="list"></div>

            <div className="back-row">
              <button id="backBtn" className="back-btn" style={{display:"none"}}>⬅ Back</button>
            </div>
          </div>
        </div>

        <div id="result" className="result" role="status" aria-live="polite">
          <h2 id="resTitle"></h2>
          <div id="resShort" className="short"></div>
          <div id="resProfile" className="profile"></div>

          <div className="emblem-wrap" id="emblemWrap" aria-hidden="true"></div>

          <div id="resBreakdown" className="breakdown"></div>

          <div className="telemetry" id="telemetryLine">Telemetry: <span id="telemetryStatus" className="status">pending</span></div>

          <div className="cta-row">
            <a id="readLink" className="cta" href="https://www.thebbc.shop/chapters" target="_blank" rel="noopener">Read the story free</a>
            <button id="resetBtn" className="reset-btn">Take Again</button>
          </div>
        </div>

        <div className="footer">“The strong do what they can and the weak suffer what they must.” — Thucydides</div>
      </div>
    </div>
  );
};

export default QuizPage;
