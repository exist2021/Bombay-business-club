'use client';

import { useEffect, useRef } from 'react';

const QuizPage = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;
    
    /* === CONFIG === */
    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwSeKmUeyUg05IplbHCCCbsbAxIrsIid9UZodDvlbd-OM1jWFElNsbtL1RCDodKqfhr/exec";

    /* === FULL story-rich 9 questions (unchanged wording) === */
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

    /* === STATE & DOM === */
    let idx = 0, answers: any[] = [], questionStart = 0;
    const intro = document.getElementById('intro');
    const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
    const consent = document.getElementById('consentChk') as HTMLInputElement;
    const quiz = document.getElementById('quiz');
    const progress = document.getElementById('progress');
    const contextLine = document.getElementById('contextLine');
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const backRow = document.getElementById('backRow');
    const result = document.getElementById('result');
    const resTitle = document.getElementById('resTitle');
    const resShort = document.getElementById('resShort');
    const resProfile = document.getElementById('resProfile');
    const resBreakdown = document.getElementById('resBreakdown');
    const emblemWrap = document.getElementById('emblemWrap');
    const telemetryLine = document.getElementById('telemetryLine');
    const telemetryStatus = document.getElementById('telemetryStatus');
    const resetBtn = document.getElementById('resetBtn');

    if (consent) {
        consent.addEventListener('change', ()=> {
            if (startBtn) startBtn.disabled = !consent.checked;
        });
    }

    if (startBtn) {
        startBtn.addEventListener('click', ()=> {
            if(!consent.checked){ alert('Please agree to send answers anonymously for research.'); return; }
            if (intro) intro.style.display = 'none';
            if (quiz) quiz.style.display = 'block';
            idx = 0; answers = [];
            render();
        });
    }


    /* === RENDER === */
    function render(){
      if(idx >= QUESTIONS.length) return finish();
      const q = QUESTIONS[idx];
      if (progress) progress.textContent = `Question ${idx+1} of ${QUESTIONS.length}`;
      if (contextLine) contextLine.textContent = q.context;
      if (questionEl) questionEl.textContent = q.q;
      if (choicesEl) choicesEl.innerHTML = '';
      if (backRow) backRow.innerHTML = '';
      questionStart = Date.now();

      q.choices.forEach((c)=>{
        const b = document.createElement('button');
        b.className = 'choice';
        b.textContent = c.txt;

        // highlight previously chosen
        if(answers[idx] && answers[idx].choice === c.txt){
          b.style.borderColor = '#a8dadc';
          b.style.background = 'rgba(168,218,220,0.06)';
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

      if(idx > 0){
        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.textContent = '⬅ Back';
        backBtn.onclick = ()=>{
          if(idx > 0){ idx--; render(); }
        };
        if (backRow) backRow.appendChild(backBtn);
      }
    }


    /* === FINISH: compute persona, show emblem, send telemetry with retry UI === */
    function finish(){
      if (quiz) quiz.style.display = 'none';
      if (result) result.style.display = 'block';

      // tally moral choices
      let master = 0, slave = 0, neutral = 0;
      answers.forEach(a => {
        if(a.moral === 'master') master++;
        else if(a.moral === 'slave') slave++;
        else neutral++;
      });
      const total = master + slave + neutral || 1;
      const masterPct = Math.round((master/total)*100);
      const slavePct = Math.round((slave/total)*100);

      // decide persona
      let persona = '', shortLine = '', profileText = '';
      if(masterPct >= 60 && masterPct > slavePct){
        persona = 'Master Morality — Power-First';
        shortLine = 'You favour decisive strength, hierarchy and ruthless pragmatism.';
        profileText = `<p><strong>Paragraph 1 — The Calculating Noble:</strong> You think like a ruler. Problems are instruments to be used, not complaints to be indulged. You prize clarity: who stands in the way is either an ally or an obstacle that must be neutralised. In crises you want fast, clean outcomes; you value competence and loyalty over pity. That instinct makes you an efficient strategist in a world of scarce time and brittle reputations.</p>
        <p><strong>Paragraph 2 — The Moral Logic of Strength:</strong> Your ethics are forged in consequence. You read power as truth — the strong make rules; the weak explain themselves. This gives you courage and cold judgment, but it can also blind you to suffering that doesn’t immediately threaten your objectives. In a family like the Chandras, your decisions privilege succession and control above sentiment.</p>`;
      } else if(slavePct >= 60 && slavePct > masterPct){
        persona = 'Slave Morality — Weak-First';
        shortLine = 'You value protection, truth, and the wellbeing of the vulnerable.';
        profileText = `<p><strong>Paragraph 1 — The Compassionate Judge:</strong> You approach choices through empathy and the language of harm. You trust that exposing truth and defending the vulnerable corrects power’s excesses. You favour methods that repair — dialogue, naming injustice, shoring up damaged lives — even when those methods are slower or risk your own comfort.</p>
        <p><strong>Paragraph 2 — The Moral Logic of the Weak:</strong> Your ethics prize equality and accountability. You see reputation as a fragile mask that must be stripped when harm is done. That impulse makes you a moral anchor in chaotic houses like the Chandras’, though it can occasionally lead you to underestimate the cold calculus of those who hold power.</p>`;
      } else {
        persona = 'Hybrid / Strategic Observer';
        shortLine = 'You balance strength with sympathy; you choose when to wield power and when to protect.';
        profileText = `<p><strong>Paragraph 1 — The Strategic Synthesizer:</strong> You recognise both logics: the necessity of decisive action and the ethical weight of protecting the weak. You read situations contextually — sometimes the ruler must act, sometimes truth must be spoken aloud. This flexibility makes you particularly valuable: you can both plan for survival and preserve what remains humane in crisis.</p>
        <p><strong>Paragraph 2 — The Moral Logic of Balance:</strong> You are mistrustful of absolutist answers. Your morality is provisional and pragmatic — a toolkit for messy realities. That means you rarely romanticise either power or victimhood; you use both concepts to solve problems rather than to argue ideology.</p>`;
      }

      // show textual result
      if (resTitle) resTitle.textContent = persona;
      if (resShort) resShort.textContent = shortLine;
      if (resProfile) resProfile.innerHTML = profileText;
      if (resBreakdown) resBreakdown.innerHTML = `<strong>Breakdown:</strong> Master choices: ${master} (${masterPct}%) • Slave choices: ${slave} (${slavePct}%) • Neutral: ${neutral}.`;

      // build emblem with gradients to match persona colors
      if (emblemWrap) emblemWrap.innerHTML = '';
      const ns = 'http://www.w3.org/2000/svg';
      const svgContainer = document.createElementNS(ns, 'svg');
      svgContainer.setAttribute('class','emblem');
      svgContainer.setAttribute('viewBox','0 0 64 64');
      svgContainer.setAttribute('aria-hidden','true');

      // defs: gradients
      const defs = document.createElementNS(ns,'defs');
      const goldGrad = document.createElementNS(ns,'linearGradient');
      goldGrad.setAttribute('id','goldGrad');
      goldGrad.setAttribute('x1','0'); goldGrad.setAttribute('y1','0'); goldGrad.setAttribute('x2','1'); goldGrad.setAttribute('y2','1');
      goldGrad.innerHTML = `<stop offset="0" stop-color="${getComputedStyle(document.documentElement).getPropertyValue('--gold') || '#C9A25A'}"/><stop offset="1" stop-color="#F3DFA8"/>`;
      defs.appendChild(goldGrad);

      const tealGrad = document.createElementNS(ns,'linearGradient');
      tealGrad.setAttribute('id','tealGrad');
      tealGrad.setAttribute('x1','0'); tealGrad.setAttribute('y1','0'); tealGrad.setAttribute('x2','1'); tealGrad.setAttribute('y2','1');
      tealGrad.innerHTML = `<stop offset="0" stop-color="${getComputedStyle(document.documentElement).getPropertyValue('--teal') || '#67C9B3'}"/><stop offset="1" stop-color="#BFF0DF"/>`;
      defs.appendChild(tealGrad);

      const splitGrad = document.createElementNS(ns,'linearGradient');
      splitGrad.setAttribute('id','splitGrad');
      splitGrad.setAttribute('x1','0'); splitGrad.setAttribute('y1','0'); splitGrad.setAttribute('x2','1'); splitGrad.setAttribute('y2','0');
      splitGrad.innerHTML = `<stop offset="0" stop-color="${getComputedStyle(document.documentElement).getPropertyValue('--gold') || '#C9A25A'}"/><stop offset="1" stop-color="${getComputedStyle(document.documentElement).getPropertyValue('--teal') || '#67C9B3'}"/>`;
      defs.appendChild(splitGrad);

      svgContainer.appendChild(defs);

      // depending on persona append appropriate shapes (simple glyphs that echo earlier icons)
      if(persona.startsWith('Master')) {
        // eagle-like shape, filled with gold gradient
        const g = document.createElementNS(ns,'g');
        g.setAttribute('fill','url(#goldGrad)');
        g.innerHTML = `<path d="M32 4c-2 4-6 8-10 10 6 0 12 2 12 2s6-2 12-2c-4-2-8-6-10-10zM8 44c4-8 20-12 24-12s20 4 24 12c-8-6-20-8-24-8s-16 2-24 8z"/><path d="M10 52c2-8 10-12 22-12s20 4 22 12H10z"/>`;
        svgContainer.appendChild(g);
      } else if(persona.startsWith('Slave')) {
        // olive branch stroked with teal gradient
        const g = document.createElementNS(ns,'g');
        g.setAttribute('stroke','url(#tealGrad)');
        g.setAttribute('stroke-width','2');
        g.setAttribute('fill','none');
        g.setAttribute('stroke-linecap','round');
        g.setAttribute('stroke-linejoin','round');
        g.innerHTML = `<path d="M8 44c8-8 18-10 24-8 6 2 12 8 24 8"/><path d="M12 36c8-8 18-14 24-12 6 2 6 6 12 10"/><path d="M20 28c6-6 12-10 20-8"/><path d="M32 56c2-6 6-8 10-10"/>`;
        svgContainer.appendChild(g);
      } else {
        // scales with split gradient stroke
        const g = document.createElementNS(ns,'g');
        g.setAttribute('stroke','url(#splitGrad)');
        g.setAttribute('stroke-width','2');
        g.setAttribute('fill','none');
        g.setAttribute('stroke-linecap','round');
        g.setAttribute('stroke-linejoin','round');
        g.innerHTML = `<path d="M32 6v10"/><path d="M16 20l32 0"/><path d="M20 24l-4 18"/><path d="M44 24l4 18"/><path d="M12 46h16"/><path d="M36 46h16"/>`;
        svgContainer.appendChild(g);
      }

      if (emblemWrap) emblemWrap.appendChild(svgContainer);

      // send telemetry (with visible status and a retry button)
      if (telemetryStatus) telemetryStatus.textContent = 'sending…';
      if (telemetryLine) telemetryLine.appendChild(createRetryButton()); // attach retry UI (will be hidden until necessary)
      sendTelemetry({ timestamp: new Date().toISOString(), answers, persona, breakdown: { master, slave, neutral } })
        .then(res=>{
          if(res.ok){
            if (telemetryStatus) {
                telemetryStatus.textContent = 'sent';
                telemetryStatus.style.color = '#9adbcf';
            }
          } else {
            if (telemetryStatus) {
                telemetryStatus.textContent = 'failed';
                telemetryStatus.style.color = '#f39c9c';
            }
            showRetry(true);
          }
        })
        .catch(err=>{
          if (telemetryStatus) {
            telemetryStatus.textContent = 'failed';
            telemetryStatus.style.color = '#f39c9c';
          }
          console.warn('Telemetry error', err);
          showRetry(true);
        });
    }

    // helper to build a retry button (hidden until needed)
    function createRetryButton(){
      const btn = document.createElement('button');
      btn.textContent = 'Retry telemetry';
      btn.style.marginLeft = '12px';
      btn.style.padding = '6px 10px';
      btn.style.borderRadius = '6px';
      btn.style.border = '1px solid rgba(255,255,255,0.06)';
      btn.style.background = 'transparent';
      btn.style.color = 'var(--muted)';
      btn.style.cursor = 'pointer';
      btn.onclick = ()=>{
        if (telemetryStatus) {
            telemetryStatus.textContent = 'retrying…';
            telemetryStatus.style.color = '#ffd28a';
        }
        sendTelemetry({ timestamp: new Date().toISOString(), answers, persona: document.getElementById('resTitle')?.textContent })
          .then(res=>{
            if(res.ok){
              if (telemetryStatus) {
                telemetryStatus.textContent = 'sent';
                telemetryStatus.style.color = '#9adbcf';
              }
              showRetry(false);
            } else {
              if (telemetryStatus) {
                telemetryStatus.textContent = 'failed';
                telemetryStatus.style.color = '#f39c9c';
              }
              showRetry(true);
            }
          }).catch(e=>{
            if (telemetryStatus) {
                telemetryStatus.textContent = 'failed';
                telemetryStatus.style.color = '#f39c9c';
            }
            showRetry(true);
          });
      };
      btn.style.display = 'none';
      btn.id = 'retryBtn';
      return btn;
    }
    function showRetry(show: boolean){
      const b = document.getElementById('retryBtn') as HTMLButtonElement;
      if(b) b.style.display = show ? 'inline-block' : 'none';
    }

    /* robust telemetry send with one retry attempt built-in */
    async function sendTelemetry(payload: any){
      try {
        const res = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        // if status 200-299, return ok
        if(res.ok) return { ok: true, status: res.status };
        // otherwise try a single quick retry after 400ms (handles some transient errors)
        await new Promise(r=>setTimeout(r,400));
        const res2 = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        return { ok: res2.ok, status: res2.status };
      } catch (err) {
        // network/CORS errors will be caught here
        console.warn('sendTelemetry error', err);
        return Promise.reject(err);
      }
    }

    /* === Reset / interactions === */
    if (resetBtn) {
        resetBtn.addEventListener('click', ()=> {
            idx = 0; answers = []; questionStart = 0;
            if(result) result.style.display = 'none';
            if(intro) intro.style.display = 'block';
            if(quiz) quiz.style.display = 'none';
            if(telemetryStatus) telemetryStatus.textContent = 'pending';
            showRetry(false);
            if(emblemWrap) emblemWrap.innerHTML = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            const consentCheck = document.getElementById('consentChk') as HTMLInputElement;
            if (consentCheck) consentCheck.checked = false;
            
            const startButton = document.getElementById('startBtn') as HTMLButtonElement;
            if (startButton) startButton.disabled = true;
        });
    }

    const consentCheck = document.getElementById('consentChk') as HTMLInputElement;

    if (consentCheck) {
        consentCheck.addEventListener('change', function(){ 
            const startButton = document.getElementById('startBtn') as HTMLButtonElement;
            if (startButton) startButton.disabled = !this.checked; 
        });
    }

  }, []);

  const quizStyles = `
    :root{
      --bg1:#0b1220; --bg2:#0f1b2b; --gold:#C9A25A; --teal:#67C9B3; --accent:#a8dadc; --muted:#d6efe6; --card:rgba(255,255,255,0.03);
    }
    .quiz-body, .quiz-body body {height:100%;margin:0;background:linear-gradient(180deg,var(--bg1),var(--bg2)) !important;color:var(--muted) !important;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;}
    .wrap{max-width:880px;margin:0 auto;padding:18px;box-sizing:border-box;}
    .header{display:flex;align-items:center;gap:16px;margin-bottom:12px;}
    .title{font-family:'Playfair Display', Georgia, serif;color:var(--gold);font-size:26px;margin:0;}
    .tagline{color:var(--accent);font-style:italic;}
    .panel{background:var(--card);border-radius:12px;padding:18px;border:1px solid rgba(255,255,255,0.04);margin-bottom:12px;}
    .context{color:#e8f7f5;line-height:1.5;font-size:15px;}
    .consent{display:flex;gap:10px;align-items:center;margin-top:12px;}
    .start-btn{background:linear-gradient(90deg,var(--gold),#EED699);color:#07131e;padding:12px 16px;border-radius:10px;border:none;font-weight:700;cursor:pointer;font-size:15px;}
    .start-btn[disabled]{opacity:0.6;cursor:not-allowed;}
    .quiz{display:none;}
    .progress{text-align:center;margin-bottom:10px;color:var(--accent);font-size:14px;}
    .card{background:var(--card);border-radius:12px;padding:18px;border:1px solid rgba(255,255,255,0.03);}
    .context-line{color:#d9f0ec;font-size:14px;margin-bottom:10px;}
    .question{color:var(--gold);font-weight:700;font-size:18px;margin-bottom:12px;line-height:1.35;}
    .choices{display:flex;flex-direction:column;gap:10px;}
    .choice{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted);padding:12px;border-radius:10px;text-align:left;font-size:15px;cursor:pointer;}
    .choice:hover{background:rgba(255,255,255,0.02);transform:translateX(3px);transition:transform .12s;}
    .back-row{display:flex;justify-content:flex-start;margin-top:12px;}
    .back-btn{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted);padding:8px 12px;border-radius:8px;cursor:pointer;}
    .back-btn:hover{background:rgba(255,255,255,0.02);}
    .result{display:none;text-align:left;padding:20px;margin-top:18px;background:var(--card);border-radius:12px;}
    .result h2{color:var(--gold);margin-bottom:8px;}
    .profile{color:#dfeee3;line-height:1.6;margin-top:8px;}
    .breakdown{margin-top:12px;color:#bfe7d9;}
    .cta-row{margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;}
    .cta{display:inline-block;background:linear-gradient(90deg,#C9A25A,#EED699);color:#07131e;padding:10px 14px;border-radius:8px;text-decoration:none;font-weight:700;}
    .reset-btn{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted);padding:10px 14px;border-radius:8px;cursor:pointer;}
    .telemetry{margin-top:12px;font-size:13px;color:#9fbfcf;}
    .telemetry .status{display:inline-block;margin-left:8px;font-weight:700;}
    .emblem-wrap{display:flex;justify-content:center;margin-top:18px;}
    .emblem{width:140px;height:140px;display:block;}
    .small-note{font-size:13px;color:#9fbfcf;margin-top:8px;}
    .footer{text-align:center;margin-top:18px;font-size:13px;color:#9aa6a0;}
    @media (max-width:640px){
      .wrap{padding:14px;}
      .title{font-size:20px;}
      .question{font-size:16px;}
      .choice{font-size:14px;}
      .emblem{width:120px;height:120px;}
    }
  `;
  
  return (
    <div className="quiz-body">
      <style dangerouslySetInnerHTML={{ __html: quizStyles }} />
      <div className="wrap" role="main">
        <div className="header">
          <div>
            <div className="title">Two Lives. One Will Be Eliminated.</div>
            <div className="tagline">A game-theory experiment — decide who survives in Vikash Chandra’s world.</div>
          </div>
        </div>

        <div id="intro" className="panel" aria-labelledby="intro-title">
          <div className="context">
            <strong>Quick context (read once; 30 seconds):</strong><br /><br />
            <strong>Vikash Chandra</strong> — the bad-boy billionaire: ruthless, obsessed with reputation and succession. <br />
            <strong>Anya</strong> — his daughter, once a film face, now hidden; her word can validate or destroy him.<br />
            <strong>Rohan Bhatt</strong> — India’s leading YouTuber, <strong>secretly married to Anya</strong>; his reach can amplify any scandal.<br />
            <strong>Dilip Shrivastava</strong> — a common man who knows dangerous things about the family and is angry but not necessarily armed with proof.<br /><br />
            This short, narrative quiz is a game-theory experiment: your answers reveal how you weigh power, truth, and survival. At the end you’ll receive a Nietzsche-inspired personality: <strong>Master Morality</strong> (power-first), <strong>Slave Morality</strong> (weak-first), or a <strong>Hybrid</strong>.
          </div>

          <div className="consent">
            <label><input id="consentChk" type="checkbox" /> I agree to send my answers anonymously for research.</label>
          </div>

          <div style={{textAlign:'center',marginTop:'12px'}}>
            <button id="startBtn" className="start-btn" disabled>▶ Start Quiz</button>
          </div>
        </div>

        <div id="quiz" className="quiz" aria-live="polite">
          <div id="progress" className="progress"></div>

          <div className="card" role="region" aria-label="Question card">
            <div id="contextLine" className="context-line"></div>
            <div id="question" className="question"></div>
            <div id="choices" className="choices" role="list"></div>
            <div id="backRow" className="back-row" aria-hidden="true"></div>
          </div>
        </div>

        <div id="result" className="result" role="status" aria-live="polite">
          <h2 id="resTitle"></h2>
          <div id="resShort" style={{fontWeight:700,color:'#a8dadc',marginTop:'6px'}}></div>
          <div id="resProfile" className="profile"></div>

          <div className="emblem-wrap" id="emblemWrap" aria-hidden="true">
            {/* Emblem placeholder — SVGs inserted dynamically */}
          </div>

          <div id="resBreakdown" className="breakdown"></div>

          <div className="telemetry" id="telemetryLine">Telemetry: <span className="status" id="telemetryStatus">pending</span></div>
          <div style={{marginTop:'10px'}} className="cta-row">
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
