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
    let i=0,answers=[];
    const intro=document.getElementById('intro'),
    quiz=document.getElementById('quiz'),
    progress=document.getElementById('progress'),
    context=document.getElementById('contextLine'),
    qEl=document.getElementById('question'),
    choices=document.getElementById('choices'),
    back=document.getElementById('backBtn'),
    result=document.getElementById('result'),
    rTitle=document.getElementById('resTitle'),
    rShort=document.getElementById('resShort'),
    rProf=document.getElementById('resProfile'),
    rIcon=document.getElementById('resIcon'),
    rBreak=document.getElementById('resBreakdown'),
    telemetryLine=document.getElementById('telemetryLine'),
    startBtn = document.getElementById('startBtn'),
    consentChk = document.getElementById('consentChk');

    if (consentChk) {
      (consentChk as HTMLInputElement).onchange = (e: any) => {
        if(startBtn) (startBtn as HTMLButtonElement).disabled = !e.target.checked;
      }
    }
    if (startBtn) {
      startBtn.onclick=()=>{
        if(intro) intro.style.display='none';
        if(quiz) quiz.style.display='block';
        i=0;answers=[];render();
      };
    }

    function render(){
      if(i>=QUESTIONS.length){finish();return;}
      const q=QUESTIONS[i];
      if(progress) progress.textContent=`Question ${i+1} of ${QUESTIONS.length}`;
      if(context) context.textContent=q.context;
      if(qEl) qEl.textContent=q.q;
      if(choices) choices.innerHTML='';
      q.choices.forEach(c=>{
        const b=document.createElement('button');
        b.className='choice';b.textContent=c.txt;
        b.onclick=()=>{
          answers[i]={q:q.q,choice:c.txt,moral:(c as any).moral};
          i++;
          render();
        };
        if(choices) choices.appendChild(b);
      });
      if(back) back.style.display=i>0?'block':'none';
      if(back) (back as HTMLButtonElement).onclick=()=>{if(i>0){i--;render();}};
    }

    function finish(){
      if(quiz) quiz.style.display='none';
      if(result) result.style.display='block';
      let m=0,s=0,n=0;
      answers.forEach((a: any) => {
        if(a.moral==='master')m++;
        else if(a.moral==='slave')s++;
        else n++;
      });
      const total=m+s+n||1,mPct=Math.round(m/total*100),sPct=Math.round(s/total*100);
      let persona='',short='',prof='',icon='';
      if(mPct>=60&&mPct>sPct){persona='Master Morality — Power-First';short='You favour decisive strength.';prof='<p>You think like a ruler—clarity and control above pity.</p>';icon='🦅';}
      else if(sPct>=60&&sPct>mPct){persona='Slave Morality — Weak-First';short='You value protection and truth.';prof='<p>You defend the vulnerable even when it costs you power.</p>';icon='🌿';}
      else{persona='Hybrid Morality';short='You balance strength and empathy.';prof='<p>You switch between control and compassion as context demands.</p>';icon='⚖️';}
      if(rTitle) rTitle.textContent=persona;
      if(rShort) rShort.textContent=short;
      if(rProf) rProf.innerHTML=prof;
      if(rIcon) rIcon.textContent=icon;
      if(rBreak) rBreak.textContent=`Master ${m} (${mPct}%) • Slave ${s} (${sPct}%) • Neutral ${n}`;
      sendTelemetry({timestamp:new Date().toISOString(),answers,persona});
    }

    function sendTelemetry(payload: any){
      if(telemetryLine) telemetryLine.textContent='Sending telemetry...';
      fetch(WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
      .then(r=>{if(r.ok){
        if(telemetryLine) {
          telemetryLine.textContent='Telemetry sent ✓';
          telemetryLine.style.color = varColor('--teal');
        }
      }
      else{
        if(telemetryLine) telemetryLine.textContent='Telemetry failed ('+r.status+')';
      }})
      .catch(()=>{if(telemetryLine) telemetryLine.textContent='Telemetry failed (offline?)';});
    }
    
    function varColor(v: string){
      if (typeof window !== 'undefined') {
        return getComputedStyle(document.documentElement).getPropertyValue(v);
      }
      return '';
    }

  }, []);

  const quizStyles = `
    :root{
      --bg1:#0a0f1c;--bg2:#121a2b;
      --gold:#ffd98a;--teal:#80e4d8;--text:#f4f4f4;--muted:#cfd6da;
    }
    html,body{margin:0;height:100%;background:linear-gradient(180deg,var(--bg1),var(--bg2));color:var(--text);
    font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,Georgia,serif;line-height:1.6;}
    .wrap{max-width:800px;margin:0 auto;padding:1.2rem;}
    h1{font-family:"Playfair Display",Georgia,serif;color:var(--gold);font-size:1.8rem;margin:.2rem 0 .4rem;}
    .subtitle{color:var(--teal);font-style:italic;margin-bottom:1rem;}
    .panel{background:rgba(255,255,255,0.05);border-radius:12px;padding:1.2rem;margin-bottom:1rem;}
    button{font-size:1rem;cursor:pointer;border-radius:8px;border:none;}
    .start-btn{background:linear-gradient(90deg,var(--gold),#fff1b7);color:#0a0f1c;font-weight:700;padding:.8rem 1.2rem;width:100%;}
    .choice{display:block;width:100%;text-align:left;margin:.4rem 0;padding:.9rem;
    background:rgba(255,255,255,0.06);color:var(--text);border:1px solid rgba(255,255,255,0.1);}
    .choice:hover{background:rgba(255,255,255,0.12);}
    .back-btn{margin-top:.5rem;background:none;border:1px solid rgba(255,255,255,0.2);color:var(--muted);padding:.6rem 1rem;}
    .progress{text-align:center;color:var(--teal);font-size:.9rem;margin-bottom:.5rem;}
    .result{display:none;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;}
    .result h2{color:var(--gold);margin-top:0;}
    .profile{margin-top:.6rem;}
    .breakdown{margin-top:.6rem;color:var(--teal);}
    .telemetry{margin-top:.8rem;font-size:.85rem;color:var(--muted);}
    @media(max-width:600px){
      body{font-size:1.05rem;}
      h1{font-size:1.5rem;}
    }
  `;

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: quizStyles }} />
      <div className="wrap">
        <h1>Two Lives. One Will Be Eliminated.</h1>
        <div className="subtitle">A game-theory experiment — decide who survives in Vikash Chandra’s world.</div>

        <div id="intro" className="panel">
          <p><strong>Context:</strong><br/>
          <b>Vikash Chandra</b> — the bad-boy billionaire obsessed with reputation and succession.<br/>
          <b>Anya</b> — his daughter, hidden and volatile.<br/>
          <b>Rohan Bhatt</b> — India’s leading YouTuber, secretly married to Anya.<br/>
          <b>Dilip Shrivastava</b> — a common man who knows too much.<br/><br/>
          Your choices reveal how you think about power, truth, and survival. At the end you’ll see a Nietzschean morality profile.</p>
          <label><input id="consentChk" type="checkbox" /> I agree to send my answers anonymously for research.</label><br/><br/>
          <button id="startBtn" className="start-btn" disabled>▶ Start Quiz</button>
        </div>

        <div id="quiz" style={{display: 'none'}}>
          <div id="progress" className="progress"></div>
          <div className="panel">
            <div id="contextLine"></div>
            <div id="question" style={{color:'var(--gold)',fontWeight:600,marginTop:'.4rem'}}></div>
            <div id="choices"></div>
            <button id="backBtn" className="back-btn" style={{display:'none'}}>⬅ Back</button>
          </div>
        </div>

        <div id="result" className="result">
          <h2 id="resTitle"></h2>
          <div id="resShort" style={{color:'var(--teal)',fontWeight:600}}></div>
          <div id="resProfile" className="profile"></div>
          <div id="resIcon" style={{fontSize:'2rem',marginTop:'.6rem',textAlign:'center'}}></div>
          <div id="resBreakdown" className="breakdown"></div>
          <div className="telemetry" id="telemetryLine"></div>
          <p style={{marginTop:'1rem',fontStyle:'italic',textAlign:'center'}}>“The strong do what they can and the weak suffer what they must.” — Thucydides</p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
