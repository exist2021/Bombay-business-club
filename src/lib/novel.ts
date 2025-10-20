export type Chapter = {
  id: number;
  title: string;
  slug: string;
  content: string;
};

const LOREM_IPSUM_PARAGRAPH = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>`;

export const chapters: Chapter[] = [
  {
    id: 1,
    title: 'Chapter 1: The Birthday Wish',
    slug: 'chapter-1',
    content: `
      <p>Anya Chandra possessed two secrets that defined her fifteenth year: she could bend people’s minds to her will, and she was desperately, hopelessly invisible.</p>
      <p>The first made her valuable to her father, Vikash Chandra—Mumbai’s most elegant crime boss, a man who had transformed his family’s Partition-era blood money into an empire of legitimate fronts and illegitimate power. The second made her miserable at her own birthday party, watching Bollywood’s newest starlet, Kiara Sharma, charm the room while Anya stood by the dessert table, drowning in expensive silk and her father’s expectations.</p>
      <p>This was the contradiction of being a Chandra daughter: gifted with supernatural power yet powerless in the ordinary cruelties of being fifteen, female, and forgettable.</p>
      <p>The ballroom shimmered with the kind of wealth that whispered rather than shouted. Venetian chandeliers cast fractured rainbows across marble floors. Silk tapestries lined walls that had witnessed both lavish celebrations and quietly sinister meetings. The guest list was ruthlessly pruned to maintain absolute privacy, consisting of only a select handful—politicians who owed favors, businessmen who were currently on the hook for money, and Bollywood producers who owed their silence. The Chandra world was hermetically sealed; the media was not invited, their curiosity held firmly in check by the widespread dread of Vikash Chandra’s influence.</p>
      <p>They had all come for Vikash Chandra. Anya was merely the excuse.</p>
      <p>She stood near the towering birthday cake—three tiers of fondant and edible gold that probably cost more than her university tuition—and watched her life unfold at a distance. Her powder-blue lehenga, chosen by her mother, was deceptively simple—handwoven silk without embroidery, the kind of understated elegance that only the truly wealthy could afford. A single strand of pearls at her throat, delicate diamond studs in her ears. The Chandra family didn’t believe in gaudy displays; their wealth announced itself through quality, not quantity.</p>
      <p>Around her, guests circulated with champagne and calculated smiles, their laughter calibrated for her father’s ears.</p>
      <p>“There you are!” Her sister Priya appeared, seventeen and already better at performing the role of Chandra daughter. “Papa keeps looking for you. Stop hiding by the cake.”</p>
      <p>“I’m not hiding.”</p>
      <p>“You’re absolutely hiding.” Priya’s phone buzzed. She glanced at it and her eyes widened. “Oh god, Kiara Sharma just walked in.”</p>
      <p>Anya’s stomach dropped. “Kiara’s here?”</p>
      <p>“Papa invited her through some producer. Can you believe she actually came? After everything…”</p>
      <p>After everything. The words hung between them, heavy with history.</p>
      <p>Kiara Sharma hadn’t always been a Bollywood starlet. Just six months ago, she’d been another Malabar Hill girl—the lawyer’s daughter from four houses down, blessed with beauty that had always set her apart. Anya remembered childhood summers when they’d all played together: Kiara, Aryan, Priya, and herself. The connections were deep, almost incestuous among the Malabar Hill elite. Anya and Aryan had dated briefly when they were thirteen, a clumsy, intense puppy love that shattered the moment Kiara, already luminous and magnetic, effortlessly caught Aryan's eye and claimed him as her own.</p>
      <p>But even then, Kiara had shone brighter. By twelve, she was stunning enough that casting agents approached her family at restaurants. By fourteen, she’d done her first commercial. And now, at eighteen, she’d just completed filming her debut feature—a romantic drama with one of Bollywood’s biggest stars that was already generating Oscar buzz before its release.</p>
      <p>And somewhere along the way, she’d stopped coming around. Stopped returning calls. The Sharma family had drifted from the Chandra orbit, and Anya had felt that distance like a personal rejection, even though she’d known—everyone knew—it wasn’t personal at all.</p>
      <p>It was her father.</p>
      <p>Through the crowd, Anya spotted her now. Kiara Sharma at eighteen, luminous in crimson silk, moved through the ballroom like she owned it. Beautiful in that effortless way that came from perfect genetics and professional styling, she commanded attention without seeking it. Men stopped mid-conversation. Women appraised and dismissed themselves in the same glance.</p>
      <p>The last time Anya had seen Kiara up close was two years ago, at a Diwali party. Kiara had been polite but distant, her eyes constantly scanning for escape routes, her smile never quite reaching her eyes when she looked at Anya. As if being near the Chandra daughters might contaminate her somehow.</p>
      <p>And standing near the entrance, watching Kiara with poorly disguised interest, was Aryan Khanna.</p>
      <p>Anya’s chest tightened, not just with a crush, but with the specific, metallic taste of old betrayal. Aryan—nineteen, heir to a media empire, casually handsome in the way of boys who’d never been told no. She’d lost him to Kiara three years ago, a devastating, humiliating defeat that confirmed her deepest fear: she would always be invisible next to Kiara. He was in Priya’s social circle, occasionally present at family gatherings, always polite to Anya in that distant way that confirmed she was beneath his notice.</p>
      <p>“I need air,” Anya muttered.</p>
      <p>“Anya—”</p>
      <p>But she was already moving toward the hallway, past clusters of guests, past the discreet security who were as much a part of Chandra events as the catering.</p>
      <p>Anya glanced back at her mother, Maya Chandra. Elegant, flawlessly beautiful, and strikingly fair, Maya was from one of Mumbai's most prestigious old families. She served as the face of 'Nexus Models,' a premier talent hunt and modeling agency. Vikash, a proud and calculated chauvinist, would never entrust a woman from his own family with true business power, but he understood the value of appearances. The agency existed primarily to keep Maya connected with society ladies and serve as a high-society front. At its dark core, Nexus Models was a highly sophisticated prostitution and compromise ring, using the lure of fame to ensnare the city’s powerful. Tonight, Maya played the perfect hostess, entertaining wives with practiced grace, her smile absolute, her control total.</p>
      <p>Anya made it to an empty corridor before the tears started. Angry tears, humiliating tears. She was fifteen today. Fifteen and still nothing had changed—still small, still overlooked, still just the useful daughter who could read minds when Papa needed leverage in business deals.</p>
      <p>“Anya.”</p>
      <p>She spun. Her father stood in the hallway, impeccable in a charcoal suit, his presence filling the space effortlessly. Vikash Chandra at forty-three was compact and controlled, every gesture economical, every word weighted. He’d built his empire on the foundation his grandfather had established during Partition—when Hindu-Muslim riots and desperate shortages created opportunities for those willing to exploit chaos. The Chandras had arrived from Lahore as wealthy refugees and transformed their black-market assets and gold—money accrued during the violent separation—into Indian power through operations that no one discussed but everyone knew about.</p>
      <p>That blood money, laundered through decades and legitimate businesses, had purchased this mansion, this life, this party.</p>
      <p>And the cold, calculating narcissism that came with it.</p>
      <p>“You’re upset,” he observed. Not concern—just assessment.</p>
      <p>“I’m fine, Papa.”</p>
      <p>He stepped closer. “You left your own party. Your mother is making excuses for you.”</p>
      <p>“I just needed a moment.”</p>
      <p>“Because of the Sharma girl.” He said it with contempt, the family name like something distasteful on his tongue. “Kiara.”</p>
      <p>Anya looked away. “It’s nothing.”</p>
      <p>“It’s never nothing with you.” He lit a cigarette, ignoring the fact that they were indoors. “That girl, her father—do you know what Rajesh Sharma tried to do two years ago?”</p>
      <p>Anya did know. Everyone in the family knew, though no one spoke of it directly. Rajesh Sharma, one of Mumbai’s most prominent criminal lawyers, had gone to the Chief Minister with a file full of evidence about Vikash Chandra’s operations. Names, dates, transactions. Enough to end the Chandra empire.</p>
      <p>It hadn’t worked. The Chief Minister owed Vikash too many favors, and the file had disappeared. But the insult had remained.</p>
      <p>“He tried to put me in jail,” Vikash said, exhaling smoke. “Me. As if I’m some common criminal instead of a businessman. As if his precious law degree makes him better than me.”</p>
      <p>“Papa, I don’t want to—”</p>
      <p>“And now his daughter parades around my house, in my ballroom, at my expense.” His eyes narrowed. “That girl humiliated you when you were younger. I remember. She stopped being your friend the moment her father decided we weren’t good enough.”</p>
      <p>That wasn’t quite true, but Anya didn’t correct him. Her father had a way of rewriting history to suit his narratives.</p>
      <p>“I want you to do something for me,” Vikash said, his voice dropping to that particular tone he used when giving orders disguised as requests. “About Kiara Sharma.”</p>
      <p>Anya’s pulse quickened. “What do you mean?”</p>
      <p>“You have your grandmother’s gift. You’ve been practicing. I know what you can do.” He studied her face. “That girl needs to learn that actions have consequences. That betraying the Chandra family has a price.”</p>
      <p>“Papa, she didn’t betray—”</p>
      <p>“Her father did. Same thing.” He flicked ash onto the marble floor. “I want you to get close to her again. Befriend her. And then I want you to use your gift to make her life very, very difficult.”</p>
      <p>The request landed like a weight in Anya’s stomach. “Why?”</p>
      <p>“Because I want Rajesh Sharma to suffer. I want him to watch his perfect daughter fall apart and know he can’t protect her. I want him to understand what happens when you try to destroy me.” Vikash’s smile was cold. “And you, beta, are going to make that happen.”</p>
      <p>“I don’t think I can—”</p>
      <p>“You can. You will.” Not a suggestion. Never a suggestion with him. “Consider it a service to the family. Your father who gives you everything, who protects you, who makes your comfortable life possible.”</p>
      <p>The manipulation was as obvious as it was effective. This was how Vikash operated—couching demands in the language of family obligation, wielding guilt like a weapon, reminding his daughters that their privilege came with prices.</p>
      <p>He’d never cared about Anya’s self-esteem, her feelings, her friendships. She was a tool to him, valuable only for what her gift could accomplish. If destroying Kiara Sharma served his vendetta against her father, then Anya’s childhood memories, her pain, her humanity—none of it mattered.</p>
      <p>“I’ll handle it,” she heard herself say, the words automatic, defeated.</p>
      <p>“Good girl.” He patted her cheek with a hand that smelled of tobacco and expensive cologne. “Now, go back to your party. Smile. Make Kiara feel welcome. Start building that friendship again. The rest will come naturally.”</p>
      <p>He walked away, leaving Anya alone in the corridor, her chest tight with the familiar weight of being her father’s daughter. But beneath the fear, a cold, sharp purpose solidified: this wasn't just his revenge. This was her chance to destroy the girl who took Aryan.</p>
      <p>She returned to the ballroom, moving through the crowd on autopilot. The party had intensified—more champagne flowing, music louder, inhibitions lowering as the hour grew late. She spotted Kiara immediately, now deep in conversation with Aryan Khanna, touching his arm as she laughed at something he said.</p>
      <p>Anya watched them from across the room. Kiara—who’d once taught her how to braid flowers into her hair during those childhood summers. Kiara—who’d effortlessly taken Aryan, confirming Anya’s status as second-best.</p>
      <p>Her father wanted Anya to destroy this girl. To befriend her only to betray her. To use her gift to break Kiara down until Rajesh Sharma watched his daughter crumble.</p>
      <p>And Anya would do it. Because she always did what her father wanted. Because refusing him was impossible. Because this was what it meant to be a Chandra—to be a weapon aimed at your father’s enemies, regardless of the cost. But most importantly, because it was her only way to finally prove herself superior to Kiara and win Aryan back.</p>
      <p>She took a breath and crossed the room.</p>
      <p>“Kiara,” she said, forcing warmth into her voice.</p>
      <p>The actress turned, and for a moment, something like genuine surprise crossed her perfect face. “Anya! Oh my god, happy birthday!” The enthusiasm seemed real, or maybe Kiara was just that good at performing.</p>
      <p>“Thank you for coming,” Anya said. “I know it’s been a while since we’ve really talked.”</p>
      <p>“I know, I’m so sorry about that.” Kiara touched her arm, the gesture familiar from childhood. “I’ve just been so busy with the film and everything. But I’ve missed you. And Priya.”</p>
      <p>Lies, probably. Or maybe not. Maybe Kiara did miss the simplicity of childhood friendships before her father had recognized the danger of the Chandra connection.</p>
      <p>“I’ve missed you too,” Anya said, and meant it, which made everything worse. “We should hang out sometime. Like old times.”</p>
      <p>“I’d love that!” Kiara’s smile was radiant. “Oh, have you met Aryan? Aryan, this is Anya—we used to play together when we were kids.”</p>
      <p>Aryan Khanna turned his attention to her, polite but perfunctory. “Happy birthday, Anya.”</p>
      <p>“Thanks,” she managed, feeling small again, invisible again.</p>
      <p>Kiara launched into some story about her film shoot, animated and glowing, clearly smitten with Aryan who seemed equally captivated. Anya smiled and nodded and felt something cold settle in her chest. This was her mission now. Befriend Kiara. Get close. And then systematically destroy her.</p>
      <p>All because her father wanted revenge.</p>
      <p>All because Anya wanted Aryan.</p>
      <p>They talked for another twenty minutes. Kiara mentioned that Aryan was taking her to some exclusive art gallery opening next week, that his family was hosting a yacht party next month, that everything was perfect and exciting and exactly what she’d dreamed her life would become.</p>
      <p>Anya collected it all. Information. Ammunition.</p>
      <p>The rest of the evening passed in a blur. Cake was cut, pictures were taken, gifts were opened. Anya smiled until her face ached, and made plans with Kiara to meet for coffee. When guests finally began departing near midnight, she felt hollowed out, a performance of herself.</p>
      <p>She’d exchanged numbers with Kiara again. The actress had hugged her goodbye, whispered that she was sorry they’d lost touch, promised they’d reconnect properly. And Anya had hugged her back, already cataloging what she’d need to make her father’s revenge possible—and her own desire a reality.</p>
      <p>But she’d been careful. When Kiara had used the powder room, Anya had followed and collected a strand of hair from the counter. When the actress had set down her clutch to take a photo, Anya had brushed against it, absorbing the essence of its owner. Small things. Untraceable things.</p>
      <p>In her bedroom, Anya locked the door and sat on her bed, laying out her collection. A strand of Kiara’s hair. A thread from her crimson dress that had caught on a chair. The memory of her perfume, her laugh, her energy.</p>
      <p>She wouldn’t act tonight. That would be too obvious, too suspicious. No, this would take time. Patience. The kind of slow, careful destruction that left no evidence, no trail, nothing that could be traced back to the Chandra family.</p>
      <p>Her phone buzzed—a text from her father: Well done. Keep building the friendship. I’ll let you know when it’s time to act.</p>
      <p>She didn’t respond. Just stared at the message until the screen went dark.</p>
      <p>Over the following weeks, Anya would rebuild her friendship with Kiara. Coffee dates, shopping trips, late-night conversations about boys and movies and dreams. She would learn Kiara’s schedule, her habits, her vulnerabilities. She would wait for the perfect moments—the gallery opening with Aryan, the yacht party, the important events that mattered.</p>
      <p>And then, carefully, methodically, she would use her gift. Small workings at first. Headaches that came at inconvenient times. Stomach troubles that made Kiara miss the gallery opening. Anxiety that spiked before the yacht party, making her cancel at the last minute. Nothing dramatic. Nothing that would seem supernatural.</p>
      <p>Just enough to make Kiara unreliable. Flaky. The kind of girl who couldn’t be counted on.</p>
      <p>And then the deeper work would begin. The spells that would twist conversations, plant seeds of doubt, turn Aryan’s interest into irritation. Making Kiara paranoid, making her say the wrong things, making fights materialize from nothing until the relationship crumbled under the weight of manufactured conflict. She would tear down the image of perfection that had cost her Aryan once, and when Kiara was sufficiently broken, Aryan would see the quiet, dutiful Anya waiting in the wings.</p>
      <p>All of it untraceable. All of it deniable. All of it exactly what her father wanted, and precisely what Anya needed.</p>
      <p>Anya lay back on her bed, still wearing her birthday lehenga, still carrying the weight of what she was about to become.</p>
      <p>Fifteen years old, and already her father’s weapon.</p>
      <p>Already damned.</p>
      <p>She closed her eyes and tried to remember what Kiara’s laugh had sounded like when they were children, before everything became complicated, before friendship became strategy, before love became impossible.</p>
      <p>The memory wouldn’t come.</p>
      <p>All she could hear was her father’s voice: Actions have consequences. Betrayal has a price.</p>
      <p>And she, Anya Chandra, would be the one to collect it.</p>
      <p>Somewhere across the city, in a modest Andheri apartment, a twenty-five-year-old man named Dilip Shrivastava sat at his kitchen table, going over divorce papers for what felt like the hundredth time. His marriage to Swati had lasted barely five years. Their children—four and two-and-a-half—are already being told stories about their father that weren’t true.</p>
      <p>He lit a cigarette and stared out at the Mumbai skyline, wondering how everything had gone so wrong so quickly.</p>
      <p>He didn’t know it yet, but in fifteen years, at a fashion book launch organized by a flamboyant, pink-wearing, Ivy League-educated friend of hers, he would meet a thirty-year-old woman named Anya Chandra. A petite, guarded woman with secrets behind her eyes and a desperate need for something—anything—that felt normal.</p>
      <p>By then, she would have spent a decade and a half weaponizing her gift for her father. She would have destroyed friendships, manipulated business deals, and slowly realized that the only cage she couldn’t escape was the one built by her own compliance.</p>
      <p>And Dilip, twice-divorced by then, weary and wary of love, would see in her not a crime boss's daughter but simply a woman who seemed as lonely as he felt.</p>
      <p>They would begin with conversation. With coffee. With the careful dance of two damaged people wondering if they still had anything left to offer each other.</p>
      <p>And ten years after that meeting, when Anya turned forty and her biological clock screamed its final warnings, Vikash Chandra would push his daughter toward this ordinary man with an extraordinary proposal—not because he cared about her happiness, but because even a witch needed to serve some useful purpose, and an heir to the Chandra empire seemed as good as any.</p>
      <p>But tonight, they were all just separate stories in the same impossible city—a teenage witch learning to weaponize friendship and desire, a rising starlet about to have her dreams poisoned, and a young divorced father wondering if he’d ever feel whole again.</p>
      <p>Mumbai sprawled beneath them all, indifferent and infinite, holding their futures in its sprawling, chaotic embrace.</p>
      <p>The intersection of their paths was still years away. But in a city of thirteen million souls, certain destinies had a way of finding each other—especially when family obligation, desperation, and magic conspired to make it so.</p>
    `,
  },
  {
    id: 2,
    title: 'Chapter 2: The High Profile Breakup — We Cannot Have an Actress as a Bahu',
    slug: 'chapter-2',
    content: `
      <p>The rest of the evening passed in a blur. Cake was cut, pictures were taken, gifts were opened. Anya smiled until her face ached, and made plans with Kiara to meet for coffee. When guests finally began departing near midnight, she felt hollowed out, a performance of herself.</p>
      <p>She’d exchanged numbers with Kiara again. The actress had hugged her goodbye, whispered that she was sorry they’d lost touch, promised they’d reconnect properly. And Anya had hugged her back, already cataloging what she’d need to make her father’s revenge possible—and her own desire a reality.</p>
      <p>But she’d been careful. When Kiara had used the powder room, Anya had followed and collected a strand of hair from the counter. When the actress had set down her clutch to take a photo, Anya had brushed against it, absorbing the essence of its owner. Small things. Untraceable things.</p>
      <p>In her bedroom, Anya locked the door and sat on her bed, laying out her collection. A strand of Kiara’s hair. A thread from her crimson dress that had caught on a chair. The memory of her perfume, her laugh, her energy.</p>
      <p>She wouldn’t act tonight. That would be too obvious, too suspicious. No, this would take time. Patience. The kind of slow, careful destruction that left no evidence, no trail, nothing that could be traced back to the Chandra family.</p>
      <p>Her phone buzzed—a text from her father: <em>Well done. Keep building the friendship. I’ll let you know when it’s time to act.</em></p>
      <p>She didn’t respond. Just stared at the message until the screen went dark.</p>
      <p>But Anya knew she wouldn’t wait for his signal. She’d start tonight. Because she wasn’t just doing this for him—she was doing it for herself. For every time Kiara had made her feel invisible. For Aryan, who’d chosen Kiara over her when they were thirteen. For every Hermès bag Kiara bought with her own commercial money while Anya had to beg her mother for basics.</p>
      <p>She pulled out her grandmother’s grimoire and her father’s occult texts. Opened them to marked pages. Set up her workspace—candles in sacred geometry, the brass owl at the center.</p>
      <p>And began constructing the voodoo doll.</p>
      <p>-----</p>
      <p><strong>Three Hours Later - 2 AM</strong></p>
      <p>The doll was complete.</p>
      <p>Anya held it up to candlelight, examining her work. Perfect proportions—tall, slender, graceful like Kiara. The hair woven into the scalp. The crimson thread around the waist. A tiny photo folded into the chest.</p>
      <p>She sat cross-legged and began the binding ritual—deep meditation, focused will, techniques learned from texts most people didn’t know existed.</p>
      <p>The connection snapped into place.</p>
      <p>And suddenly, Anya’s clairvoyant gift exploded outward.</p>
      <p>She could FEEL Kiara. Four houses down Malabar Hill—close enough that if she concentrated, she could sense her childhood friend’s presence. Could feel her emotional state—happy, tired from the party, texting with someone (Aryan probably), drifting toward sleep.</p>
      <p>Anya’s consciousness flowed through the sympathetic link, following invisible threads across the short distance between their mansions. She found Kiara’s ajna chakra and pressed against it gently.</p>
      <p>Testing.</p>
      <p>Kiara stirred in her bed, phone slipping from her hand, feeling something undefined. A pressure. A presence.</p>
      <p>Anya smiled and withdrew.</p>
      <p>The connection was perfect. Through her clairvoyant sight, she could watch Kiara’s life unfold now. Could tune in whenever she wanted—like a private channel only she could access.</p>
      <p>She saw Kiara settle back to sleep in her bedroom just four houses away. Peaceful. Unaware.</p>
      <p>Perfect.</p>
      <p>Anya wrapped the doll in black silk and began the first working.</p>
      <p>“<em>Shir mein dard</em>,” she whispered. Pain in the head.</p>
      <p>She touched the doll’s forehead, visualizing pressure building behind Kiara’s eyes. Not severe—just persistent. The kind that made you irritable, unreliable.</p>
      <p>Through her empathic gift, she felt it take hold. Felt Kiara wince in her sleep, felt the discomfort registering.</p>
      <p>Good.</p>
      <p>Anya held the visualization for twenty minutes, pouring envy and resentment and cold calculation into the spell. Every memory of Kiara effortlessly taking Aryan at thirteen. Every time Kiara had been “polite but distant” at that Diwali party two years ago, her eyes scanning for escape routes. Every casual mention tonight of her film career, her commercial deals, her ability to buy her own Hermès.</p>
      <p>The rage was quiet, sophisticated, buried under perfect manners and Malabar Hill breeding.</p>
      <p>But it burned.</p>
      <p>And it made the magic sharp.</p>
      <p>When she finished, Anya carefully stored the doll and climbed into bed.</p>
      <p>Four houses away, Kiara woke with a splitting headache at 3 AM and couldn’t get back to sleep.</p>
      <p>-----</p>
      <p><strong>One Week Later</strong></p>
      <p>“I’m so glad we’re doing this!”</p>
      <p>Kiara slid into the booth at Candies—their usual spot in Bandra, equidistant from both their Malabar Hill homes. She looked slightly tired, with faint circles under her eyes that makeup didn’t quite hide.</p>
      <p>“Me too. It’s been too long.” Anya’s smile was warm, genuine. “How’s post-production going?”</p>
      <p>“Crazy! December release is coming up fast. The studio’s already planning the promotional schedule.” Kiara’s excitement was infectious. “And Aryan’s been so supportive—he came to the editing suite yesterday just to keep me company.”</p>
      <p>Anya’s smile never wavered. “That’s sweet. You two seem really good together.”</p>
      <p>“We are! I mean, we’ve only been dating two months, but it feels… right, you know?” Kiara leaned forward conspiratorially. “He wants me to meet his extended family at some yacht party next month. His mom’s apparently very particular about who he dates.”</p>
      <p>“The Khannas would be. Old Mumbai family, all that.” Anya sipped her coffee. “Are you nervous?”</p>
      <p>“Terrified! What if they don’t like me?” Kiara laughed, but real anxiety flickered underneath. “And I’ve been having these weird headaches lately—stress, probably—but I’m terrified I’ll get sick right before some important event.”</p>
      <p>“Have you seen a doctor?”</p>
      <p>“Yeah, they can’t find anything wrong. Just told me to manage stress better.” Kiara shrugged. “Which is impossible with the film schedule.”</p>
      <p>“I’m sure it’ll pass,” Anya said soothingly. “You’re probably just exhausted from filming. Your body catching up.”</p>
      <p>They talked for another hour—easy, comfortable, like the childhood friends they’d once been. Kiara mentioned shopping for a new Kelly bag for the film premiere. Anya admired her vintage Hermès clutch and asked where she found such good pieces.</p>
      <p>No tension. No edge. Just two Malabar Hill girls reconnecting over expensive coffee.</p>
      <p>When they parted with hugs and promises to do this weekly, Kiara seemed lighter. Happy to have her old friend back.</p>
      <p>And Anya walked back to her car feeling satisfied.</p>
      <p>Because through her clairvoyant sight, she’d been watching Kiara all week. Had seen the headaches disrupting her editing sessions. Had felt her anxiety about meeting Aryan’s extended family. Had registered every small moment of stress and amplified it through the doll.</p>
      <p>And Kiara suspected nothing. Thought Anya was her ally. Her support system.</p>
      <p>Perfect.</p>
      <p>-----</p>
      <p><strong>Three Weeks Later</strong></p>
      <p>Anya sat in meditation at 2 AM, consciousness extended across the short distance to Kiara’s house.</p>
      <p>Through her clairvoyant sight, she watched Kiara pacing her bedroom, phone in hand, clearly distressed.</p>
      <p>The yacht party was tomorrow. And Kiara had just developed severe nausea.</p>
      <p>Anya had worked the doll for two hours tonight—the most intense session yet. Visualizing Kiara’s stomach churning, her body rebelling. Making the thought of being on a boat absolutely impossible.</p>
      <p>Now, through her extended awareness, she felt Kiara run to the bathroom. Felt her vomit. Felt the confusion and terror—Why does this keep happening?</p>
      <p>Anya smiled in the darkness and pushed harder through the sympathetic link.</p>
      <p>Make it worse. Make it undeniable.</p>
      <p>Across Malabar Hill, Kiara spent the next three hours sick, finally texting Aryan at 6 AM that she couldn’t make the party.</p>
      <p>Through her clairvoyant sight, Anya watched Aryan’s response arrive. Felt his frustration through the emotional threads connecting all of them.</p>
      <p>Phase one was working perfectly.</p>
      <p>-----</p>
      <p><strong>Six Weeks After the Birthday Party</strong></p>
      <p>The yacht party was beautiful—Anya could see it in real-time through her clairvoyant awareness even as she stood on the deck.</p>
      <p>Mumbai’s elite in expensive casual wear. Champagne. The Arabian Sea glittering. The Khanna family showing off their wealth with characteristic Malabar Hill understatement—no vulgarity, just effortless luxury.</p>
      <p>And Kiara, four houses away in her bedroom, too sick to attend.</p>
      <p>Anya wore simple linen, her hair pulled back, looking healthy and present. Everything Kiara wasn’t.</p>
      <p>She didn’t need to chase Aryan down. Just made herself visible—laughing with Priya’s friends, looking utterly reliable.</p>
      <p>He found her by the railing, looking out at the water.</p>
      <p>“Beautiful day,” he said.</p>
      <p>“Gorgeous. Your family throws the best parties.”</p>
      <p>“Kiara was really looking forward to this.” He sounded tired. “She feels terrible.”</p>
      <p>“I’m sure. These stomach things are awful.”</p>
      <p>“She’s been having a lot of health issues.” Frustration leaked through his careful tone. “The headaches, now this. Doctors can’t find anything wrong.”</p>
      <p>Anya said nothing, just offered sympathetic silence.</p>
      <p>“My mom’s starting to make comments,” Aryan continued, clearly needing to vent. “About reliability. About whether Kiara’s serious enough for our family.”</p>
      <p>“That must be hard. For both of you.”</p>
      <p>“It is.” He looked at her. “You’ve known her since we were kids. Was she always like this?”</p>
      <p>“The Kiara I remember was actually super reliable,” Anya said honestly. “But we were children then. People change. Maybe the Bollywood pressure is too much?”</p>
      <p>She planted the seed so subtly he’d think it was his own thought.</p>
      <p>“Maybe,” he said quietly.</p>
      <p>They stood in comfortable silence. Then he smiled—something shifting in how he looked at her. “I forgot how easy you are to talk to.”</p>
      <p>“We did grow up together. All of us—you, me, Kiara, Priya. Malabar Hill kids.” Anya’s tone was light, nostalgic. “Remember those summers?”</p>
      <p>“Yeah.” Something wistful in his voice. “Things were simpler then.”</p>
      <p>“They were.”</p>
      <p>He looked at her a moment longer, then rejoined the party.</p>
      <p>And Anya stood alone, feeling satisfied.</p>
      <p>Through her clairvoyant sight, she could sense Kiara’s misery four houses away. Could feel Aryan’s growing frustration even as he socialized.</p>
      <p>The relationship was fracturing exactly as planned.</p>
      <p>-----</p>
      <p><strong>Ten Weeks After the Birthday Party</strong></p>
      <p>Anya no longer needed the weekly coffee dates to track Kiara’s deterioration.</p>
      <p>Through her clairvoyant gift, she watched everything in real-time. Kiara missing auditions because of headaches. Canceling plans with Aryan’s family because of mysterious nausea. The fights that materialized from nothing.</p>
      <p>Because Anya was inside Kiara’s head now. Had projected her consciousness through the sympathetic link, taken up residence in Kiara’s ajna chakra—that space behind the forehead where perception originated.</p>
      <p>From there, she could whisper. Plant suggestions. Twist how Kiara heard Aryan’s words.</p>
      <p>When Aryan said something innocent, Anya made Kiara hear criticism.</p>
      <p>When Kiara tried to explain, Anya made the words come out defensive, accusatory.</p>
      <p>She watched through Kiara’s own eyes as the relationship imploded. Felt through her empathic connection as love turned to exhaustion.</p>
      <p>And channeled it all back into the magic, making it stronger.</p>
      <p>Her father coordinated from his end—calling producers, planting rumors about Kiara being “unreliable.” The whispers spread through Bollywood: talented but problematic. Beautiful but flaky.</p>
      <p>Between Anya’s magical assault and Vikash’s industry manipulation, Kiara’s life was collapsing.</p>
      <p>And she had no idea why.</p>
      <p>Through her clairvoyant sight, Anya watched Kiara cry in her bedroom four houses away. Watched her search for answers that didn’t exist in the material world.</p>
      <p>Watched her slowly break.</p>
      <p>-----</p>
      <p><strong>December 5th—Seven Days Before the Khanna Anniversary</strong></p>
      <p>Anya sat in her father’s study, eyes closed, consciousness extended.</p>
      <p>“She just found out about the reshoot,” she reported. “December 12th. Same day as the anniversary party.”</p>
      <p>“Perfect.” Vikash lit a cigarette. “Your work?”</p>
      <p>“The emotional manipulation is ready. When she tells Aryan, every word will come out wrong.”</p>
      <p>“Good.”</p>
      <p>Through her clairvoyant sight, Anya watched Kiara across Malabar Hill, pacing her room, phone in shaking hands.</p>
      <p>Watched her try to call Aryan. Watched her hesitate, delete the text, rewrite it.</p>
      <p>Anya was positioned in Kiara’s ajna chakra now, whispering: <em>He won’t understand. He’ll think you’re choosing work over him. He’ll be angry.</em></p>
      <p>Making Kiara’s anxiety spike. Making the conversation doomed before it even started.</p>
      <p>“She’s falling apart,” Anya said, still in that meditative state, consciousness spanning the short distance between mansions.</p>
      <p>“Excellent. When the relationship ends, we move to phase two. Complete career destruction.”</p>
      <p>“Understood.”</p>
      <p>Vikash studied his daughter—her composed face, her steady breathing, her absolute control.</p>
      <p>“You’re very good at this, Anya.”</p>
      <p>“Thank you.”</p>
      <p>His gaze traveled over her in that assessing way. “Stay useful.”</p>
      <p>“I will.”</p>
      <p>He left, and Anya remained in meditation, watching through her clairvoyant sight as Kiara finally called Aryan.</p>
      <p>Watched through Kiara’s own perception as the conversation went catastrophically wrong—every word twisted by Anya’s presence in her consciousness, every intention misread, every attempt at explanation sounding like selfishness.</p>
      <p>Watched as Aryan’s patience finally snapped.</p>
      <p>And felt nothing.</p>
      <p>Just cold satisfaction that the plan was working.</p>
      <p>-----</p>
      <p><strong>December 12th—The Khanna Anniversary Party</strong></p>
      <p>Anya wore a peacock-blue sari, elegant and sophisticated. She looked older than fifteen, looked like she belonged among Malabar Hill’s elite.</p>
      <p>Through her clairvoyant sight, she could feel Kiara at Film City—miles away but visible to her extended awareness. On that sound stage shooting unnecessary scenes, heartbroken, confused.</p>
      <p>And she could feel Aryan here at his family’s Juhu estate—sad but relieved. Exhausted by three months of chaos.</p>
      <p>Anya didn’t pursue him. Just existed in the same space—present, healthy, reliable. A Malabar Hill girl who understood his world because she’d grown up in it alongside him.</p>
      <p>When he found her on the terrace, she already knew what he’d say. Had watched the decision form through her clairvoyant awareness.</p>
      <p>“It’s over,” he said quietly. “With Kiara.”</p>
      <p>“I’m sorry.”</p>
      <p>“Are you?” He looked at her. “You two were supposed to reconnect. Become friends again.”</p>
      <p>“We did. I care about her.” And it was true—Anya could feel genuine affection for Kiara alongside the cold satisfaction of destroying her. “But I also see what this has done to you. Three months of chaos.”</p>
      <p>“Yeah.” He studied her face. “You’re different than you were as kids.”</p>
      <p>“We all are.”</p>
      <p>“No, I mean—you’re more…” He searched for words. “Present. Solid. The opposite of—”</p>
      <p>“The opposite of Kiara right now.”</p>
      <p>“I wasn’t going to say that.”</p>
      <p>“But it’s true.” Anya’s voice was gentle, matter-of-fact. “She’s falling apart and no one knows why. And you’re exhausted from trying to hold her together.”</p>
      <p>Aryan said nothing, but something in his expression confirmed it.</p>
      <p>They stood in silence, and Anya felt the pieces shifting exactly as planned.</p>
      <p>Not romance. Not yet. Just recognition. Just Aryan seeing her properly for the first time since they were thirteen.</p>
      <p>Seeing her as Kiara’s opposite. As someone who belonged in his world without struggle.</p>
      <p>As someone who might, eventually, be more than just Priya’s little sister. More than just another Malabar Hill girl he’d known forever.</p>
      <p>The thought was forming in him. Anya could sense it through her gifts.</p>
      <p>And she smiled slightly, looking out at the water, letting the moment settle.</p>
      <p>Four houses away on Malabar Hill, in the Sharma mansion, Rajesh Sharma watched his daughter fall apart and couldn’t understand why.</p>
      <p>Couldn’t protect her from invisible forces.</p>
      <p>Couldn’t know that Vikash Chandra’s revenge was systematic, magical, and utterly without mercy.</p>
      <p>And his daughter—beautiful, talented, kind—was paying the price for his righteousness.</p>
      <p>While Vikash Chandra’s daughter stood at a party in a peacock-blue sari, looking elegant and controlled and absolutely lethal.</p>
      <p>The owl tattoo on her ankle burned beneath the silk.</p>
      <p>The voodoo doll waited in its rosewood box four houses away.</p>
      <p>Yet Kiara had one bitter consolation: Anya never won Aryan Khanna.</p>
      <p>Instead, Anya entered another world—bright, noisy, unpredictable.</p>
      <p>She found herself drawn to India’s biggest YouTuber.</p>
      <p>Ten years younger, always talking, unstoppable.</p>
      <p>Her father scowled and called him a motor mouth.</p>
      <p>But for Anya, power had new faces.</p>
      <p>And the real war was only just beginning.</p>
    `,
  },
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 3,
    title: `Chapter ${i + 3}: The Invitation`,
    slug: `chapter-${i + 3}`,
    content: `
      <p>This is the beginning of chapter ${i + 3}. The story unfolds as our characters navigate the intricate web of power and ambition in the heart of Bombay.</p>
      ${LOREM_IPSUM_PARAGRAPH}
      <p>As the sun set over the Arabian Sea, casting long shadows across the city, a decision was made that would change everything. The air was thick with anticipation, the scent of opportunity mingling with the ever-present aroma of sea salt and spices.</p>
      ${LOREM_IPSUM_PARAGRAPH.repeat(2)}
      <p>And so, the journey begins. Each step forward is a step into the unknown, a dance with destiny in the city of dreams.</p>
    `,
  })),
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}
