'use client';

import { useEffect, useRef } from 'react';

const QuizPage = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;
    
    /* Telemetry URL */
    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwSeKmUeyUg05IplbHCCCbsbAxIrsIid9UZodDvlbd-OM1jWFElNsbtL1RCDodKqfhr/exec";

    /* Canonical 9-question set (with secret-marriage detail) */
    const QUESTIONS = [
      {
        context: "Vikash built his empire by controlling people and stories. Two men now hold pieces of truth that can unmake him. Rohan Bhatt — India’s leading YouTuber — secretly married his daughter Anya; that secret alone could destroy everything. Dilip Shrivastava — a common man ruined by Vikash — is whispering at the edges.",
        q: "Who does the bad-boy billionaire act against first?",
        choices: [
          { tag: "rohan", txt: "Rohan Bhatt — fame can convert loyalty into exposure." },
          { tag: "dilip", txt: "Dilip Shrivastava — a common man’s secrets corrode quietly." },
          { tag: "neither", txt: "Neither — control both and wait for the clearer opening." }
        ]
      },

      {
        context: "Dilip is talking to anyone who listens. He has anger, not proof; ignoring him is risky.",
        q: "Vikash does not buy silence; he breeds obedience. What is his move against Dilip?",
        choices: [
          { tag: "contain", txt: "Isolate and surveil Dilip until fear quiets him." },
          { tag: "punish", txt: "Send a warning — escalate the cost of talking to force compliance." },
          { tag: "erase", txt: "Remove him — silence the source before rumours spread." }
        ]
      },

      {
        context: "Rohan is loyal but always on camera. One unscripted moment could reveal the hidden marriage or validate suspicion.",
        q: "Rohan’s visibility is a constant risk. How should Vikash handle India’s most-watched man?",
        choices: [
          { tag: "keep", txt: "Keep him visible and scripted — let fame serve control." },
          { tag: "fade", txt: "Reduce his public appearances to test loyalty without the spotlight." },
          { tag: "erase", txt: "Stage an accident — remove a public liability cleanly." }
        ]
      },

      {
        context: "At home the fights flare and cool. Anya needs cover; she cannot just walk away. A marriage could hide the strain and protect the image.",
        q: "Vikash needs a social fix fast. Who does Anya realistically marry — and what does that choice mean for power?",
        choices: [
          { tag: "rohan", txt: "Rohan Bhatt — public partner, but can she trust the man who once fled?" },
          { tag: "dilip", txt: "Dilip Shrivastava — lower status but nearer and desperate." },
          { tag: "vikashpick", txt: "Whoever Vikash picks — an optics solution, not romance." }
        ]
      },

      {
        context: "Rumours gather traction. A public scandal would ruin reputation and succession plans — Vikash will not confess.",
        q: "Which move stops the immediate leak without admitting fault?",
        choices: [
          { tag: "negotiate", txt: "Bend Dilip into silence and leverage him quietly." },
          { tag: "removeDilip", txt: "Eliminate Dilip — silence the only credible threat." },
          { tag: "removeRohan", txt: "Remove Rohan — a visible mouth gone quiet calms panic." }
        ]
      },

      {
        context: "After any big move the household needs a signal that things are under control.",
        q: "To steady the house quickly, which action does Vikash take that directly involves Rohan, Dilip, or Anya?",
        choices: [
          { tag: "tighten", txt: "Tighten the leash on Rohan and Dilip — more limits, more surveillance." },
          { tag: "neutralize", txt: "Neutralize Dilip’s credibility — ruin his name and standing." },
          { tag: "presentAnya", txt: "Present Anya calm and visible — reset the public story." }
        ]
      },

      {
        context: "Anya’s secret marriage to Rohan would validate Dilip’s timeline and make his accusations credible.",
        q: "If proof could surface, what does Vikash choose right now to protect the dynasty?",
        choices: [
          { tag: "hideAnya", txt: "Keep Anya invisible — no proof, no scandal." },
          { tag: "killDilip", txt: "Eliminate Dilip — remove the connector between marriage and accusations." },
          { tag: "showAnya", txt: "Let Anya appear calm and loyal — use her voice to discredit claims." }
        ]
      },

      {
        context: "You’ve seen motives and moves: power, fear, fame and truth in sharp relief.",
        q: "Whose reasoning feels closest to yours — whose mind do you understand best?",
        choices: [
          { tag: "vikash", txt: "Vikash Chandra — preserve power at all costs." },
          { tag: "anya", txt: "Anya Chandra — safety, love and survival shape choices." },
          { tag: "dilip", txt: "Dilip Shrivastava — truth matters even at great cost." },
          { tag: "rohan", txt: "Rohan Bhatt — fame is influence; visibility is survival." }
        ]
      },

      {
        context: "Everything balances now: Vikash holds wealth, Rohan holds reach, Dilip holds knowledge, and Anya will follow power.",
        q: "Who, in your judgement, truly wins this game? (Anya will marry the one who holds power.)",
        choices: [
          { tag: "vikashwins", txt: "Vikash Chandra — control adapts and survives." },
          { tag: "rohanwins", txt: "Rohan Bhatt — reach and platform reshape outcomes." },
          { tag: "dilipwins", txt: "Dilip Shrivastava — truth endures beyond power." }
        ]
      }
    ];

    let idx = 0, answers: any[] = [], questionStart = 0;
    const intro = document.getElementById('intro'),
          startBtn = document.getElementById('startBtn'),
          consent = document.getElementById('consentChk') as HTMLInputElement,
          quiz = document.getElementById('quiz'),
          progress = document.getElementById('progress'),
          contextLine = document.getElementById('contextLine'),
          questionEl = document.getElementById('question'),
          choicesEl = document.getElementById('choices'),
          backRow = document.getElementById('backRow'),
          result = document.getElementById('result'),
          resProfile = document.getElementById('resProfile');

    if (consent && startBtn) {
      consent.addEventListener('change', ()=> (startBtn as HTMLButtonElement).disabled = !consent.checked);
      startBtn.addEventListener('click', ()=> {
        if(!consent.checked){ alert('Please agree to send answers anonymously to continue.'); return; }
        intro!.style.display = 'none';
        quiz!.style.display = 'block';
        idx = 0; answers = [];
        render();
      });
    }


    /* Render with Back button and restore previous choice highlight */
    function render(){
      if(idx >= QUESTIONS.length) return finish();
      const q = QUESTIONS[idx];
      progress!.textContent = `Question ${idx+1} of ${QUESTIONS.length}`;
      contextLine!.textContent = q.context;
      questionEl!.textContent = q.q;
      choicesEl!.innerHTML = '';
      backRow!.innerHTML = '';
      questionStart = Date.now();

      // show choices
      q.choices.forEach((c)=>{
        const b = document.createElement('button');
        b.className = 'choice';
        b.textContent = c.txt;

        // highlight if previously chosen
        if(answers[idx] && answers[idx].choice === c.txt){
          b.style.borderColor = '#a8dadc';
          b.style.background = 'rgba(168,218,220,0.06)';
        }

        b.onclick = ()=>{
          // store / overwrite current answer
          answers[idx] = {
            index: idx+1,
            context: q.context,
            question: q.q,
            choice: c.txt,
            tag: c.tag,
            timeTakenSec: Math.round((Date.now() - questionStart) / 1000)
          };
          idx++;
          setTimeout(render, 120);
        };
        choicesEl!.appendChild(b);
      });

      // Back button (if not at first)
      if(idx > 0){
        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.textContent = '⬅ Back';
        backBtn.onclick = ()=>{
          if(idx > 0){ idx--; render(); }
        };
        backRow!.appendChild(backBtn);
      }
    }

    /* Finish: show quote and send telemetry */
    function finish(){
      quiz!.style.display = 'none';
      result!.style.display = 'block';
      resProfile!.innerHTML = "<p>“The strong do what they can and the weak suffer what they must.\" — Thucydides</p><p>Your answers have been recorded anonymously to help us understand how readers think about power, fame, and truth.</p>";
      const payload = { timestamp: new Date().toISOString(), answers, ua: navigator.userAgent || '' };
      fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
        .then(()=>console.log('Telemetry sent'))
        .catch(e=>console.warn('Telemetry failed', e));
    }
  }, []);

  const quizStyles = `
    :root{
      --bg1:#0b1220; --bg2:#0f1b2b; --gold:#C9A25A; --accent:#a8dadc; --muted:#d6efe6; --card:rgba(255,255,255,0.03);
    }
    .quiz-body, .quiz-body body {
        height:100%;
        margin:0;
        background:linear-gradient(180deg,var(--bg1),var(--bg2)) !important;
        color:var(--muted) !important;
        font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    .wrap{max-width:820px;margin:0 auto;padding:20px;box-sizing:border-box;}
    .intro{background:var(--card);border-radius:14px;padding:22px;border:1px solid rgba(255,255,255,0.04);}
    .quiz-body h1{font-family:'Playfair Display', Georgia, serif;color:var(--gold);margin:6px 0 10px;font-size:26px;text-align:center;}
    .tagline{color:var(--accent);font-style:italic;text-align:center;margin-bottom:12px;}
    .context{color:#e8f7f5;line-height:1.5;font-size:15px;margin-bottom:12px;}
    .context strong{color:#ffffff;}
    .consent{display:flex;gap:12px;align-items:center;margin:12px 0;}
    .consent input{width:18px;height:18px;}
    .start-btn{background:linear-gradient(90deg,var(--gold),#EED699);color:#07131e;padding:12px 18px;border-radius:10px;border:none;
      font-weight:700;cursor:pointer;font-size:16px;}
    .start-btn[disabled]{opacity:0.5;cursor:not-allowed;}
    .quiz{display:none;margin-top:18px;}
    .progress{text-align:center;margin-bottom:10px;color:var(--accent);font-size:14px;}
    .card{background:var(--card);border-radius:12px;padding:18px;border:1px solid rgba(255,255,255,0.03);}
    .context-line{color:#d9f0ec;font-size:14px;margin-bottom:8px;}
    .question{color:var(--gold);font-weight:700;font-size:18px;margin-bottom:10px;line-height:1.35;}
    .choices{display:flex;flex-direction:column;gap:10px;}
    .choice{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted);padding:12px;border-radius:10px;
      text-align:left;font-size:15px;cursor:pointer;}
    .choice:hover{background:rgba(255,255,255,0.02);transform:translateX(3px);transition:transform .12s;}
    .back-row{display:flex;justify-content:flex-start;margin-top:8px;}
    .back-btn{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted);padding:8px 12px;border-radius:8px;cursor:pointer;}
    .back-btn:hover{background:rgba(255,255,255,0.02);}
    .result{display:none;text-align:center;padding:20px;margin-top:18px;background:var(--card);border-radius:12px;}
    .result h2{color:var(--gold);margin-bottom:6px;}
    .result p{color:#dfeee3;line-height:1.6;}
    .quiz-body footer{text-align:center;margin-top:18px;font-size:13px;color:#9aa6a0;}
    a.cta{display:inline-block;margin-top:12px;background:linear-gradient(90deg,#8ad0b5,#47d19b);color:#07131e;padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:700;}
    @media(max-width:520px){
      .wrap{padding:14px;} .quiz-body h1{font-size:20px;} .question{font-size:17px;} .choice{font-size:14px;}
    }
  `;
  
  return (
    <div className="quiz-body">
      <style dangerouslySetInnerHTML={{ __html: quizStyles }} />
      <div className="wrap" role="main">
        <div id="intro" className="intro" aria-labelledby="title">
          <h1 id="title">The Bombay Business Club — Survival Quiz</h1>
          <div className="tagline">A Game Theory experiment in power, control and survival.</div>

          <div className="context">
            <strong>Quick context (30 seconds):</strong><br />
            <strong>Vikash Chandra</strong> — the bad-boy billionaire: ruthless, obsessed with reputation and succession.<br />
            <strong>Anya</strong> — his daughter, once a film face, now hidden; her word can validate or destroy him.<br />
            <strong>Rohan Bhatt</strong> — India’s leading YouTuber, secretly married to Anya; that union must stay hidden.<br />
            <strong>Dilip Shrivastava</strong> — a common man who knows dangerous things about the family.<br /><br />
            This quiz is a short game-theory experiment: your choices show how you think about power and survival in their world. No prior knowledge needed.
          </div>

          <label className="consent"><input type="checkbox" id="consentChk" /> <span style={{fontSize: '14px'}}>I agree to send my answers anonymously for research and development.</span></label>
          <div style={{marginTop: '12px', textAlign: 'center'}}><button id="startBtn" className="start-btn" disabled>▶ Start Quiz</button></div>
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
          <h2 id="resTitle">🎭 The Game Ends Here</h2>
          <p id="resProfile"></p>
          <a className="cta" href="https://www.thebbc.shop/chapters" target="_blank" rel="noopener">Read the story free — thebbc.shop/chapters</a>
        </div>

        <footer>© The Bombay Business Club — <a href="https://thebbc.shop" style={{color:'var(--gold)',textDecoration:'none'}}>thebbc.shop</a></footer>
      </div>
    </div>
  );
};

export default QuizPage;
