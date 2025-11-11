'use client';

import { useEffect, useRef } from 'react';

const QuizPage = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;
    
    const WEBHOOK_URL="https://script.google.com/macros/s/AKfycbyYvmDRXjeDqJmk4MyWVfv6evhRkE-zA44-lMfOHXXt9veH4Sygmo1UzfNajZNauPiNIQ/exec";

    const QUESTIONS=[
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

    let idx=0,answers:any[]=[];
    const intro=document.getElementById('intro'),
    quizEl=document.getElementById('quiz'),
    progress=document.getElementById('progress'),
    contextLine=document.getElementById('contextLine'),
    questionEl=document.getElementById('question'),
    choicesEl=document.getElementById('choices'),
    backBtn=document.getElementById('backBtn') as HTMLButtonElement,
    resultEl=document.getElementById('result'),
    resTitle=document.getElementById('resTitle'),
    resShort=document.getElementById('resShort'),
    resProfile=document.getElementById('resProfile'),
    resBreakdown=document.getElementById('resBreakdown'),
    emblem=document.getElementById('emblem'),
    consentChk = document.getElementById('consentChk') as HTMLInputElement,
    startBtn = document.getElementById('startBtn') as HTMLButtonElement;

    if (consentChk) {
      consentChk.onchange = (e: any) => {
        if(startBtn) startBtn.disabled = !e.target.checked;
      }
    }
    
    if (startBtn) {
      startBtn.onclick = () => {
        if(intro) intro.style.display='none';
        if(quizEl) quizEl.style.display='block';
        idx=0;
        answers=[];
        render();
      };
    }

    function render(){
      if(idx >= QUESTIONS.length){
        finish();
        return;
      }
      const q = QUESTIONS[idx];
      if(progress) progress.textContent=`Question ${idx+1} of ${QUESTIONS.length}`;
      if(contextLine) contextLine.textContent=q.context;
      if(questionEl) questionEl.textContent=q.q;
      if(choicesEl) choicesEl.innerHTML='';
      q.choices.forEach(c=>{
        const b=document.createElement('button');
        b.className='choice';
        b.textContent=c.txt;
        b.onclick=()=>{
          answers[idx]={q:q.q,choice:c.txt,moral:(c as any).moral};
          idx++;
          render();
        };
        if(choicesEl) choicesEl.appendChild(b);
      });
      if(backBtn) backBtn.style.display=idx>0?'inline-block':'none';
      if(backBtn) backBtn.onclick=()=>{if(idx>0){idx--;render();}};
    }

    function finish(){
      if(quizEl) quizEl.style.display='none';
      if(resultEl) resultEl.style.display='block';
      let master=0,slave=0,neutral=0;
      answers.forEach(a=>{
        if(a.moral==='master') master++;
        else if(a.moral==='slave') slave++;
        else neutral++;
      });
      const total=master+slave+neutral||1;
      const mPct=Math.round(master/total*100),sPct=Math.round(slave/total*100);
      let persona='',short='',profile='',icon='';
      if(mPct>=60 && mPct>sPct){
        persona='Master Morality — Power First';
        short='You favour decisive strength and hierarchy.';
        icon='🦅';
        profile='<p><b>The Calculating Noble:</b> You see power as proof of truth; clarity matters more than compassion.</p><p>You read obstacles as problems to be neutralised — a ruler’s logic, efficient but cold.</p>';
      } else if(sPct>=60 && sPct>mPct){
        persona='Slave Morality — Weak First';
        short='You prize truth and protection over dominance.';
        icon='🌿';
        profile='<p><b>The Compassionate Judge:</b> You value justice and empathy, exposing power’s cruelty even at personal risk.</p><p>Your moral lens steadies chaos, but you may underestimate ruthless minds.</p>';
      } else {
        persona='Hybrid Morality';
        short='You balance strength with sympathy.';
        icon='⚖️';
        profile='<p><b>The Strategic Observer:</b> You shift between dominance and empathy, reading context before acting.</p><p>Your flexibility keeps you human in the game of power.</p>';
      }
      if(resTitle) resTitle.textContent=persona;
      if(resShort) resShort.textContent=short;
      if(resProfile) resProfile.innerHTML=profile;
      if(resBreakdown) resBreakdown.textContent=`Master ${master} (${mPct}%) • Slave ${slave} (${sPct}%) • Neutral ${neutral}`;
      if(emblem) emblem.textContent=icon;
      fetch(WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({timestamp:new Date().toISOString(),answers,persona})});
    }
  }, []);

  const quizStyles = `
    :root{
      --bg1:#0b1220; --bg2:#0f1b2b; --gold:#C9A25A; --teal:#67C9B3; --accent:#a8dadc; --muted:#d6efe6; --card:rgba(255,255,255,0.03);
    }
    html,body{height:100%;margin:0;background:linear-gradient(180deg,var(--bg1),var(--bg2));color:var(--muted);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;}
    .wrap{max-width:880px;margin:0 auto;padding:18px;box-sizing:border-box;}
    .title{font-family:'Playfair Display', Georgia, serif;color:var(--gold);font-size:26px;margin:0;}
    .tagline{color:var(--accent);font-style:italic;margin-bottom:10px;}
    .panel{background:var(--card);border-radius:12px;padding:18px;border:1px solid rgba(255,255,255,0.04);margin-bottom:12px;}
    .context{color:#e8f7f5;line-height:1.5;font-size:15px;}
    .start-btn{background:linear-gradient(90deg,var(--gold),#EED699);color:#07131e;padding:12px 16px;border-radius:10px;border:none;font-weight:700;cursor:pointer;font-size:15px;}
    .start-btn[disabled]{opacity:0.6;cursor:not-allowed;}
    .quiz{display:none;}
    .progress{text-align:center;margin-bottom:10px;color:var(--accent);font-size:14px;}
    .card{background:var(--card);border-radius:12px;padding:18px;border:1px solid rgba(255,255,255,0.03);}
    .question{color:var(--gold);font-weight:700;font-size:18px;margin-bottom:12px;line-height:1.35;}
    .choices{display:flex;flex-direction:column;gap:10px;}
    .choice{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted);padding:12px;border-radius:10px;text-align:left;font-size:15px;cursor:pointer;}
    .choice:hover{background:rgba(255,255,255,0.02);transform:translateX(3px);transition:transform .12s;}
    .back-btn{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted);padding:8px 12px;border-radius:8px;cursor:pointer;margin-top:10px;}
    .result{display:none;text-align:left;padding:20px;margin-top:18px;background:var(--card);border-radius:12px;}
    .result h2{color:var(--gold);margin-bottom:8px;}
    .profile{color:#dfeee3;line-height:1.6;margin-top:8px;}
    .breakdown{margin-top:12px;color:#bfe7d9;}
    .emblem{display:flex;justify-content:center;margin-top:18px; font-size: 60px;}
    .footer{text-align:center;margin-top:18px;font-size:13px;color:#9aa6a0;}
    @media(max-width:640px){.title{font-size:20px;}}
  `;

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: quizStyles }} />
      <div className="wrap">
        <div className="title">Two Lives. One Will Be Eliminated.</div>
        <div className="tagline">A game-theory experiment — decide who survives in Vikash Chandra’s world.</div>

        <div id="intro" className="panel">
          <div className="context">
            <strong>Context (30 s read):</strong><br />
            <b>Vikash Chandra</b> — the bad-boy billionaire, ruthless and obsessed with succession.<br />
            <b>Anya</b> — his daughter, hidden after her career was buried; her word can destroy him.<br />
            <b>Rohan Bhatt</b> — India’s leading YouTuber, secretly married to Anya; fame itself is danger.<br />
            <b>Dilip Shrivastava</b> — a common man who knows too much and has nothing to lose.<br /><br />
            Nine questions map how you think about power, truth and survival.  
            The result reveals your Nietzschean morality — <strong>Master</strong>, <strong>Slave</strong> or <strong>Hybrid</strong>.
          </div>
          <label><input id="consentChk" type="checkbox" /> I agree to send my answers anonymously for research.</label><br /><br />
          <button id="startBtn" className="start-btn" disabled>▶ Start Quiz</button>
        </div>

        <div id="quiz" className="quiz">
          <div id="progress" className="progress"></div>
          <div className="card">
            <div id="contextLine" className="context-line"></div>
            <div id="question" className="question"></div>
            <div id="choices" className="choices"></div>
            <button id="backBtn" className="back-btn" style={{display: 'none'}}>⬅ Back</button>
          </div>
        </div>

        <div id="result" className="result">
          <h2 id="resTitle"></h2>
          <div id="resShort" style={{fontWeight:700, color:'#a8dadc'}}></div>
          <div id="resProfile" className="profile"></div>
          <div className="emblem" id="emblem"></div>
          <div id="resBreakdown" className="breakdown"></div>
          <div className="footer">“The strong do what they can and the weak suffer what they must.” — Thucydides</div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
