
'use client';

import { useEffect, useRef } from 'react';
import { ScriptProps } from 'next/script';

const QuizPage = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;

    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwSeKmUeyUg05IplbHCCCbsbAxIrsIid9UZodDvlbd-OM1jWFElNsbtL1RCDodKqfhr/exec";
    const QUESTIONS = [
      { q: "Vikash Chandra has two problems. Rohan, a YouTuber with a dangerous reach, and Dilip, a common man who knows dark secrets. Who should he deal with first?",
        choices: [
          {tag:"strategist", txt:"Rohan — loud voices spread too quickly."},
          {tag:"idealist", txt:"Dilip — secrets can destroy quietly."},
          {tag:"empath", txt:"Neither — control both and wait."}
        ]},
      { q: "Dilip hints he might talk, but has little proof. How should Vikash respond?",
        choices: [
          {tag:"strategist", txt:"Offer money and incentives to keep him quiet."},
          {tag:"empath", txt:"Convince him gently; fear breaks trust."},
          {tag:"idealist", txt:"Set an example — make leakage costly."}
        ]},
      { q: "Rohan posts a vague video criticizing the family. What’s the move?",
        choices: [
          {tag:"strategist", txt:"Contain: remove platform access and allies."},
          {tag:"empath", txt:"Engage: try to calm him and offer a deal."},
          {tag:"idealist", txt:"Expose him — let truth do the work."}
        ]},
      { q: "Anya seems distant. Does Vikash assume defiance or fatigue?",
        choices: [
          {tag:"strategist", txt:"Defiance — suppress early."},
          {tag:"empath", txt:"Fatigue — give illusion of freedom."},
          {tag:"idealist", txt:"Uncertain — watch and collect signals."}
        ]},
      { q: "A public scandal could ruin reputation but clear rivals. What does he do?",
        choices: [
          {tag:"strategist", txt:"Leak strategically — control the narrative."},
          {tag:"empath", txt:"Bury it quietly — stability matters."},
          {tag:"idealist", txt:"Let it explode — chaos reveals truths."}
        ]},
      { q: "A trusted aide suggests a ritual to bind loyalty. Is ritual useful?",
        choices: [
          {tag:"strategist", txt:"Use ritual tactically — belief is leverage."},
          {tag:"empath", txt:"Avoid rituals — they replace real trust."},
          {tag:"idealist", txt:"Embrace it — symbols change behavior."}
        ]},
      { q: "Dilip is vulnerable and alone. Do you coerce him into compliance or remove him?",
        choices: [
          {tag:"strategist", txt:"Coerce — keep the asset alive while useful."},
          {tag:"empath", txt:"Protect him secretly — mercy matters."},
          {tag:"idealist", txt:"Remove him — a silenced witness is final."}
        ]},
      { q: "If only one man can be spared to serve the empire, who lives?",
        choices: [
          {tag:"strategist", txt:"Dilip — controllable and useful."},
          {tag:"empath", txt:"Rohan — he can be softened."},
          {tag:"idealist", txt:"Neither — sparing legitimizes tyranny."}
        ]},
      { q: "Newsrooms sniff a story. Does Vikash bribe, threaten, or ignore?",
        choices: [
          {tag:"strategist", txt:"Bribe — incentives smooth outcomes."},
          {tag:"empath", txt:"Ignore — attention dies without fuel."},
          {tag:"idealist", txt:"Threaten — fear is fast and clear."}
        ]},
      { q: "At the end, what matters most — legacy, truth, or peace?",
        choices: [
          {tag:"strategist", txt:"Legacy — secure the line at all costs."},
          {tag:"idealist", txt:"Truth — exposure is the final cure."},
          {tag:"empath", txt:"Peace — the quiet life is the goal."}
        ]}
    ];

    let idx = 0;
    let answers: any[] = [];
    let questionStart = 0;

    const intro = document.getElementById('intro');
    const startBtn = document.getElementById('startBtn') as HTMLButtonElement | null;
    const consentChk = document.getElementById('consentChk') as HTMLInputElement | null;
    const quiz = document.getElementById('quiz');
    const progress = document.getElementById('progress');
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const backBtn = document.getElementById('backBtn') as HTMLButtonElement | null;
    const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement | null;
    const result = document.getElementById('result');
    const resEmoji = document.getElementById('resEmoji');
    const resTitle = document.getElementById('resTitle');
    const resProfile = document.getElementById('resProfile');
    
    if (consentChk && startBtn) {
      consentChk.addEventListener('change', ()=>{ startBtn.disabled = !consentChk.checked; });
    }

    if(startBtn && consentChk && intro && quiz) {
      startBtn.addEventListener('click', ()=>{
        if(!consentChk.checked) { alert('Please allow anonymous data collection to continue.'); return; }
        intro.style.display='none';
        quiz.style.display='block';
        idx = 0; answers = [];
        render();
      });
    }


    function nowMs(){ return Date.now(); }

    function render(){
      if (idx < 0) idx = 0;
      if (idx >= QUESTIONS.length) { 
        finish(); 
        return; 
      }
      
      const q = QUESTIONS[idx];
      
      if (progress) progress.textContent = `Question ${idx+1} of ${QUESTIONS.length}`;
      if (questionEl) questionEl.textContent = q.q;
      if (choicesEl) choicesEl.innerHTML = '';
      
      q.choices.forEach((c, ci)=>{
        const btn = document.createElement('button');
        btn.className = 'choice';
        btn.textContent = c.txt;
        btn.onclick = ()=>{ select(ci); };
        if (choicesEl) choicesEl.appendChild(btn);
      });
      
      questionStart = nowMs();
      if (backBtn) backBtn.style.visibility = idx === 0 ? 'hidden' : 'visible';
      if (nextBtn) nextBtn.disabled = true;
    }

    function select(choiceIndex: number){
      const q = QUESTIONS[idx];
      const choice = q.choices[choiceIndex];
      const t = (nowMs() - questionStart)/1000;
      answers.push({ index: idx+1, question: q.q, choiceIndex, choiceText: choice.txt, tag: choice.tag, timeTaken: t });
      idx++;
      setTimeout(()=>{ render(); }, 120);
    }
    
    function goBack(){
      if(idx<=0) return;
      idx = Math.max(0, idx-1);
      answers.pop();
      render();
    }
    
    if(backBtn) {
      backBtn.onclick = goBack;
    }
    
    if(nextBtn) {
        nextBtn.onclick = () => { /* nextQ logic seems missing, but let's keep it empty */ };
    }


    function finish(){
      if (quiz) quiz.style.display='none';
      const tally = { strategist:0, empath:0, idealist:0 };
      answers.forEach(a=>{ tally[a.tag as keyof typeof tally] = (tally[a.tag as keyof typeof tally]||0) + 1; });
      const order = ['strategist','empath','idealist'];
      let top = order[0];
      order.forEach(k=>{ if(tally[k as keyof typeof tally] > tally[top as keyof typeof tally]) top = k; });
      const profiles = {
        strategist: { emoji: '🦉', title: 'The Strategist', p1: 'You think like Vikash — precise, ruthless, and composed. You reduce choices to variables and time to currency. You prefer control over chaos.', p2: 'This clarity wins battles but risks losing souls. The map is clean; the board can be lonely.'},
        empath: { emoji: '⚖️', title: 'The Empath', p1: 'You think like Anya — compassionate, cautious, and human. You weigh pain alongside outcome and try to preserve people.', p2: 'This kindness saves lives, but it can be exploited. Know when mercy is strategy, and when it is a cost.'},
        idealist: { emoji: '💀', title: 'The Idealist', p1: 'You think like the truth-tellers — daring, principled, and willing to burn bridges for revelation. Truth matters more than safety.', p2: 'This courage inspires, but it can be self-destructive. Revelation changes the world — and you may be changed with it.'}
      };
      const profile = profiles[top as keyof typeof profiles];
      if (resEmoji) resEmoji.textContent = profile.emoji;
      if (resTitle) resTitle.textContent = profile.title;
      if (resProfile) resProfile.innerHTML = `<p>${profile.p1}</p><p style="margin-top:10px">${profile.p2}</p><p style="margin-top:12px;color:#b8d9c9;font-size:13px">Score breakdown — Strategist: ${tally.strategist}, Empath: ${tally.empath}, Idealist: ${tally.idealist}</p>`;
      if (result) result.style.display='block';
      
      const payload = {
        submissionId: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : (Math.random().toString(36).slice(2)+Date.now()),
        timestamp: new Date().toISOString(),
        questions: answers,
        finalArchetype: top,
        scoreBreakdown: tally,
        device: navigator.userAgent || null,
        locale: navigator.language || null,
        consent: !!(consentChk && consentChk.checked)
      };

      (async function send(){
        try{
          const res = await fetch(WEBHOOK_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
          if(!res.ok) throw new Error('network');
          console.log('Telemetry sent');
        }catch(err){
          console.warn('Send failed, retrying once...', err);
          try{
            await new Promise(r=>setTimeout(r,800));
            await fetch(WEBHOOK_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
            console.log('Telemetry sent on retry');
          }catch(e){
            console.error('Telemetry failed', e);
          }
        }
      })();
    }
  }, []);

  const quizStyles = `
    body {
        background: linear-gradient(180deg, #061020, #07131e) !important;
        color: #d6efe6 !important;
    }
    :root{
      --bg1:#061020;
      --bg2:#07131e;
      --gold:#C9A25A;
      --emerald:#2FA06A;
      --muted:#d6efe6;
      --card: rgba(255,255,255,0.03);
    }
    .quiz-body {
        height:100%;
        margin:0;
        background:linear-gradient(180deg,var(--bg1),var(--bg2));
        color:var(--muted);
        font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    .wrap{max-width:720px;margin:0 auto;padding:18px;box-sizing:border-box;}
    .intro{background:var(--card);border-radius:12px;padding:18px;text-align:center;border:1px solid rgba(255,255,255,0.04);}
    .cover{width:100%;max-width:440px;border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,0.6);display:block;margin:10px auto;}
    .quiz-body h1{font-family:'Playfair Display', Georgia, serif;color:var(--gold);margin:10px 0;font-size:20px;}
    .tagline{color:var(--emerald);font-size:15px;margin-bottom:8px;font-style:italic;}
    .lead{color:#e6f3ea;font-size:15px;line-height:1.45;margin:8px 0 18px;}
    .consent{display:flex;gap:10px;align-items:center;justify-content:center;margin:10px 0;}
    .consent input{width:18px;height:18px;}
    .start-btn{background:linear-gradient(90deg,var(--gold),#EED699);color:#07131e;padding:12px 18px;border-radius:10px;border:none;font-weight:700;cursor:pointer;font-size:16px;}
    .start-btn[disabled]{opacity:0.5;cursor:not-allowed;}
    .quiz{display:none;margin-top:16px;}
    .progress{color:var(--emerald);text-align:center;margin-bottom:10px;font-size:15px;}
    .card{background:var(--card);border-radius:12px;padding:16px;border:1px solid rgba(255,255,255,0.04);}
    .question{color:var(--gold);font-weight:700;font-size:20px;margin-bottom:12px;line-height:1.3;}
    .choices{display:flex;flex-direction:column;gap:10px;}
    .choice{background:transparent;border:1px solid rgba(255,255,255,0.08);color:var(--muted);padding:12px;border-radius:10px;text-align:left;font-size:17px;cursor:pointer;}
    .choice:hover{background:rgba(255,255,255,0.03);transform:translateX(3px);transition:transform .12s;}
    .nav{display:flex;justify-content:space-between;gap:10px;margin-top:14px;}
    .nav button{flex:1;padding:10px;border-radius:10px;border:none;font-weight:700;cursor:pointer;font-size:15px;}
    .back{background:transparent;color:var(--muted);border:1px solid rgba(255,255,255,0.04);}
    .next{background:linear-gradient(90deg,var(--emerald),#47d19b);color:#07131e;}
    .result{display:none;text-align:left;padding:20px;margin-top:16px;background:var(--card);border-radius:12px;border:1px solid rgba(255,255,255,0.04);}
    .result h2{color:var(--gold);font-size:20px;margin:6px 0;}
    .result .emoji{font-size:40px;margin-bottom:8px;}
    .result p{color:#d3efe3;line-height:1.6;font-size:15px;}
    .cta{display:inline-block;margin-top:14px;background:linear-gradient(90deg,var(--emerald),#47d19b);color:#07131e;padding:12px 16px;border-radius:10px;text-decoration:none;font-weight:700;}
    .quiz-body footer{color:#9aa6a0;text-align:center;margin-top:18px;font-size:13px;}
    @media (min-width:760px){
      .wrap{padding:28px;}
      .quiz-body h1{font-size:24px;}
      .question{font-size:22px;}
      .choice{font-size:18px;}
    }
    @media (max-width:420px){
      .quiz-body h1{font-size:18px;}
      .question{font-size:18px;}
      .choice{font-size:15px;}
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: quizStyles }} />
      <div className="quiz-body">
        <div className="wrap" role="main">
          <div id="intro" className="intro" aria-labelledby="title">
            <h1 id="title">The Bombay Business Club — Survival Quiz</h1>
            <div className="tagline">A Game Theory experiment in power, control, and desire.</div>
            <div className="lead">Step into a world where every decision has a cost. Choose like a strategist. Lose like a human. In this short experiment, your moves reveal how you think about power.</div>
            <label className="consent">
              <input type="checkbox" id="consentChk" />
              <span style={{ fontSize: '14px', color: '#dfeee3' }}>I agree to share my answers anonymously for research and game-development purposes.</span>
            </label>
            <div style={{ marginTop: '10px' }}><button id="startBtn" className="start-btn" disabled>▶ Begin the Experiment</button></div>
          </div>

          <div id="quiz" className="quiz" aria-live="polite">
            <div id="progress" className="progress">Question 1 of 10</div>
            <div className="card">
              <div id="question" className="question"></div>
              <div id="choices" className="choices" role="list"></div>
            </div>
            <div className="nav">
              <button id="backBtn" className="back" aria-label="Back">← Back</button>
              <button id="nextBtn" className="next" aria-label="Next" disabled>Next →</button>
            </div>
          </div>

          <div id="result" className="result" role="region" aria-live="polite">
            <div className="emoji" id="resEmoji"></div>
            <h2 id="resTitle"></h2>
            <div id="resProfile"></div>
            <a className="cta" href="https://www.thebbc.shop/chapters" target="_blank" rel="noopener">📖 Read the full story → thebbc.shop/chapters</a>
          </div>

          <footer>© The Bombay Business Club — <a href="https://thebbc.shop" style={{ color: 'var(--gold)', textDecoration: 'none' }}>thebbc.shop</a></footer>
        </div>
      </div>
    </>
  );
};

export default QuizPage;

    