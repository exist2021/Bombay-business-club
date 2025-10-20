
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
  {
    id: 3,
    title: 'Chapter 3: The Years of Broken Things',
    slug: 'chapter-3',
    content: `
      <h2>Three Years After Kiara’s Destruction</h2>
      <p>Anya was eighteen now, three years since she’d systematically destroyed Kiara Sharma’s life and relationship with Aryan Khanna.</p>
      <p>Three years of patient waiting.</p>
      <p>Three years of occasionally running into Aryan at family gatherings, at Malabar Hill parties, at the Alibaug beach houses where Mumbai’s elite escaped on weekends, at the Lonavala farmhouses where families spent long holidays.</p>
      <p>Three years of him slowly forgetting Kiara’s chaos and remembering the quiet Chandra girl who’d always been there.</p>
      <p>At fifteen, she’d been invisible—the girl who destroyed his girlfriend from the shadows.</p>
      <p>At eighteen, she was becoming visible—poised, elegant, about to start at NYU, interesting in ways she hadn’t been at fifteen.</p>
      <p>And Aryan, now twenty-one, finally saw her.</p>
      <p>It started slowly. Conversations at parties lasting longer. Him seeking her out during a weekend at his family’s Alibaug property—walking along their private beach while their parents had sundowners, him talking excitedly about his father’s new venture, an airline company that would compete with the established carriers. Late-night texts about nothing important. Then his hand finding hers one evening at the Khanna farmhouse in Khandala, the Western Ghats stretching into mist around them.</p>
      <p>“You’re different than I remembered,” he said. “More present. More… there.”</p>
      <p><em>More there than Kiara</em>, she thought.</p>
      <p>When he asked her to come early to his father’s next party at their Juhu beach house—“just us, before everyone arrives”—she went home floating.</p>
      <p>After three years of waiting, this was finally happening.</p>
      <p>Her mother was waiting in her room.</p>
      <p>-----</p>
      <p>“Sit, beta. We need to talk about Aryan Khanna.”</p>
      <p>Maya was gentle, concerned. “He’s a lovely boy. Good family. But you need to understand—the Khannas and Chandras coexist by respecting boundaries. Suresh is launching this airline. Your father has interests in logistics, fuel supply chains. They’ll do business together. That’s how it works—cooperation, mutual benefit, careful distance.”</p>
      <p>“What does that have to do with—”</p>
      <p>“Marriage mixes everything. Creates complications.” Maya smoothed Anya’s hair back from her face, the gesture tender. “You know things, beta. Family things. Business things. Things you do with your gifts for your father—reading people in negotiations, sensing intentions, gathering information. You know how our world actually works.”</p>
      <p>Anya said nothing.</p>
      <p>“Imagine you marry Aryan. Five years later, there’s an argument. You’re angry, he’s angry, things get said. Or imagine ten years later, there’s a divorce—these things happen in the best families. And then what? Suresh Khanna knows everything about how we operate? About what you can do? About your father’s real business?”</p>
      <p>“I would never—”</p>
      <p>“You wouldn’t mean to. But love makes us careless. Your father and I have seen it happen.” Maya stood, walked to the window. “NYU accepted you. Film school. Tisch program. This is what you’ve wanted since you were twelve years old, beta. Your father arranged everything—full scholarship, best faculty, connections in the industry.”</p>
      <p>“I didn’t apply to—”</p>
      <p>“Your father knows what you need before you do. He pays attention, Anya. He sees how you watch films, how you analyze them, how you talk about cinematography and editing.” She turned back, smiling. “This is good for you. Real education, away from distractions. Away from boys who seem perfect but are actually complicated. When you come back in four years, you’ll see everything clearly. You’ll thank us.”</p>
      <p>“And Aryan?”</p>
      <p>“Will move on. These things are intense at your age, but they pass. He’ll find some nice girl from an appropriate family. You’ll find someone when the time is right—someone who fits properly.” Maya walked to the door, paused. “You leave in six weeks. Start thinking about what you want to pack. Your father’s assistant will handle the visa paperwork.”</p>
      <p>She left, closing the door softly behind her.</p>
      <p>Anya sat on her bed and felt the future solidifying like concrete around her feet.</p>
      <p>-----</p>
      <p>She tried to catch her father the next evening. Found him in the marble foyer, already dressed for the evening—charcoal Tom Ford suit, checking his Patek Philippe.</p>
      <p>“Papa, I need to talk about—”</p>
      <p>“Not now. Bombay Business Club meeting in twenty minutes.” He adjusted his cufflinks without looking at her. “Your flight to New York is booked. Tuesday, 11 PM Air India. Your mother has the details.”</p>
      <p>“But I haven’t even decided if—”</p>
      <p>“The decision is made.” He picked up his briefcase, car keys. “This is good for you.”</p>
      <p>He walked past her to where his driver waited with the Mercedes, engine already running.</p>
      <p>Ten seconds. That was the entire conversation.</p>
      <p>Anya stood in the foyer, marble cool under her feet, and understood: This was already finished. Her attendance at NYU wasn’t a suggestion or an opportunity. It was a fact. Aryan wasn’t a possibility. He was already in the past.</p>
      <p>Her father had decided.</p>
      <p>That meant it was done.</p>
      <p>-----</p>
      <p>The next two weeks moved like a dream underwater—everything muffled, distorted, inevitable.</p>
      <p>Aryan’s texts came at strange hours. <em>Sorry, in meeting with Dad. Call you later?</em> He didn’t.</p>
      <p>When she tried calling, his phone went to voicemail. He’d text back hours later: <em>Crazy day. Aviation ministry stuff. Tomorrow?</em></p>
      <p>Tomorrow never came.</p>
      <p>The Juhu party got postponed. “Family obligations,” Aryan’s message said. “My dad needs me at investor presentations. Rain check?”</p>
      <p>She saw him once more, at a Malabar Hill function. He was apologetic, distracted, surrounded by his father’s business associates.</p>
      <p>“Things are insane right now,” he said, barely making eye contact. “The airline launch is consuming everything. And you’ll be in New York soon anyway, right?”</p>
      <p>“In three weeks.”</p>
      <p>“That’s great. NYU is incredible. You’ll love it there.” He glanced over his shoulder where his father was gesturing him over. “I should—my dad needs me. But we’ll catch up before you leave, yeah?”</p>
      <p>They didn’t.</p>
      <p>No dramatic fight. No tearful goodbye. Just distance widening until there was nothing left to hold onto.</p>
      <p>At breakfast the morning of her flight, her father was reading the Economic Times over coffee.</p>
      <p>“New York will be good for you,” he said without looking up. “Focus on the work.”</p>
      <p>That was all. Four words.</p>
      <p>Anya flew to New York that night, leaving behind Aryan Khanna and the three-year revenge that had meant everything and achieved nothing.</p>
      <p>-----</p>
      <h2>NYU - Age 19</h2>
      <p>Tisch School of the Arts should have been freedom.</p>
      <p>Anya threw herself into filmmaking—learning Panavision cameras, editing on Avid, understanding the grammar of cinema. She was good at it. Her student films were dark, psychologically complex, featuring women trapped in beautiful cages. Her professors praised her “distinctive voice” and “mature perspective.”</p>
      <p>They didn’t know she was just filming her own life.</p>
      <p>She made friends carefully. Other film students, artists, the kind of creative people her father would have despised. She went to parties in Brooklyn warehouses, drank cheap wine, tried marijuana once and hated how it made her clairvoyant gifts spike uncontrollably, made her feel everyone’s emotions in the room simultaneously until she had to lock herself in a bathroom to breathe.</p>
      <p>She learned that other people’s families operated on different rules. That “family obligation” wasn’t universal. That some daughters chose their own careers, their own partners, their own lives without consulting fathers who operated like emperors.</p>
      <p>It should have been revelatory.</p>
      <p>But her father’s presence was everywhere.</p>
      <p>Not physically—he stayed in Mumbai, running his empire. But his people were in New York. She’d run into “family friends” at restaurants in Manhattan. Her mother’s cousin’s husband “happened to be visiting” and took her to dinner. A Harvard classmate of her father’s who now ran a hedge fund invited her to a networking event and asked too many questions about what she was doing, who she was seeing, how she was spending her time.</p>
      <p>She felt watched. Always.</p>
      <p>Still, she tried.</p>
      <p>-----</p>
      <h2>Cannes - Age 19</h2>
      <p>Six months into her first year, Anya attended the Cannes Film Festival with Zara Ahmed—a stunning Bangalore model-turned-actress who was aggressively networking her way toward Bollywood stardom. Within five years, Zara would star opposite Shah Rukh Khan and become one of India’s biggest actresses. But at Cannes, she was still hungry, still climbing, still treating every interaction like an audition.</p>
      <p>“Stay close,” Zara told her on the Croisette, both of them in borrowed designer gowns. “Film festivals are where careers get made. You need to meet everyone.”</p>
      <p>That’s how Anya met Jean-Luc Rousseau.</p>
      <p>He was standing outside the Palais des Festivals smoking a Gauloise, wearing a vintage Godard t-shirt under a rumpled blazer, looking utterly bored by the spectacle around him.</p>
      <p>“You’re not watching the film?” Anya asked in French.</p>
      <p>He glanced at her, surprised. “You speak French.”</p>
      <p>“School. And I spent a summer in Paris when I was fourteen.”</p>
      <p>“The film inside is garbage. Pretentious garbage. Beautiful cinematography covering up the fact that the director has nothing to say.” He offered her the cigarette. She shook her head. “You’re a student?”</p>
      <p>“NYU. Tisch. You?”</p>
      <p>“Filmmaker. Documentaries. Real stories, not this—” he gestured at the festival behind them, “—this circus of wealthy people pretending to care about art.”</p>
      <p>She should have walked away. Should have recognized the danger immediately—the passionate idealism, the contempt for wealth and power, the exact kind of person her father would destroy without hesitation.</p>
      <p>Instead, she smiled. “Tell me about your documentaries.”</p>
      <p>They spent three days together at Cannes. Watching films, arguing about Truffaut and Bresson, walking along the beach at 3 AM while Jean-Luc chain-smoked and talked about using cinema to expose injustice, to give voice to the voiceless, to challenge the systems that kept people powerless.</p>
      <p>Everything about him was exactly what her father would hate.</p>
      <p>Which was probably why she fell so hard.</p>
      <p>-----</p>
      <p>They kept in touch after Cannes. Long emails about films they were watching, ideas they were developing. Then he visited New York. Then she visited Paris during spring break. Then it stopped being visits and started being a relationship.</p>
      <p>Jean-Luc’s apartment in the East Village was tiny—a fifth-floor walkup with a bathtub in the kitchen and films stacked everywhere. He edited his documentaries on a secondhand Mac, survived on espresso and cigarettes, believed completely that art could change the world.</p>
      <p>“You’re different from what I expected,” he told her one afternoon, both of them tangled in his narrow bed, rain drumming against the single window. “When you said your family was from Mumbai, I imagined… I don’t know. Conservative. Traditional. But you’re here. You’re free.”</p>
      <p>She didn’t correct him. Didn’t mention her father, or what the Chandra name meant, or the supernatural gifts she carried like weapons she couldn’t put down.</p>
      <p>For three months, she was just Anya. Just a girl in love with a boy who saw her as a person rather than a tool.</p>
      <p>It was the happiest she’d been since childhood.</p>
      <p>-----</p>
      <p>The call came at 7 PM New York time—4:30 AM in Mumbai.</p>
      <p>Her mother never called at 4:30 AM.</p>
      <p>“Beta, I’m sorry to wake you. It’s Priya. She’s having a difficult time. Can you come home for a week? She needs you.”</p>
      <p>Anya sat up in Jean-Luc’s bed, his arm still around her waist. “What happened? Is she okay?”</p>
      <p>“She’s fine, just—you know your sister. She’s emotional, she needs family support right now. Can you come? Please? Just for a week.”</p>
      <p>“Maa, I have midterms—”</p>
      <p>“Beta, please. She asked for you specifically. She won’t talk to me or your father, just keeps saying she needs her sister.” Maya’s voice cracked slightly—a masterful touch. “I’m worried about her. I wouldn’t ask if it wasn’t important.”</p>
      <p>Anya looked at Jean-Luc, still sleeping, his hand loosely holding hers. “Okay. I’ll book a flight.”</p>
      <p>“Your father’s assistant will handle it. Check your email. The ticket is already there—Thursday afternoon flight. Thank you, beta. Priya will be so relieved.”</p>
      <p>-----</p>
      <p>When Anya landed at Mumbai airport, her mother picked her up personally—unusual enough to trigger warning bells immediately.</p>
      <p>“How’s Priya?”</p>
      <p>“Priya?” Maya looked confused for a second, then: “Oh, she’s much better. I think she just needed to know you were coming. You know how she gets—dramatic.”</p>
      <p>At home, Priya was in her studio painting, looking completely fine.</p>
      <p>“You called Maa saying you needed me?”</p>
      <p>Priya set down her brush. “What? No. I mean, I’m happy you’re here, but I didn’t—” She paused. “Maa said you had a break from school?”</p>
      <p>“She said you were having a crisis.”</p>
      <p>Understanding flickered across Priya’s face. “I’m not having a crisis. I’m painting. I’m fine.” She lowered her voice. “Why are you really here?”</p>
      <p>But Anya already knew.</p>
      <p>-----</p>
      <p>The week stretched.</p>
      <p>“Stay a few more days, beta. Your father wants a family dinner—you know how rare that is with everyone’s schedules.”</p>
      <p>Then: “Your cousin Neha is visiting from Delhi. She specifically asked to see you.”</p>
      <p>Then: “Just through the weekend. What’s the harm? You can study from home.”</p>
      <p>Every time Anya tried to book a return flight, her mother had a reason why she should wait one more day, just one more, it’s so nice having you home, beta, we miss you so much.</p>
      <p>By the time she got back to New York ten days later, Jean-Luc’s apartment was empty.</p>
      <p>His phone number was disconnected. His email bounced back.</p>
      <p>The super in his building shrugged. “Immigration came. Said he had visa issues. He had to leave immediately—like, packed a suitcase and left that day. Didn’t even take most of his stuff.”</p>
      <p>Anya stood in the empty apartment—films still stacked against the walls, his espresso maker still on the kitchen counter, his Godard poster still tacked above the bathtub—and felt something essential break inside her chest.</p>
      <p>She called her mother.</p>
      <p>“Jean-Luc is gone.”</p>
      <p>“Gone? What do you mean?” Maya’s voice was perfectly surprised, perfectly concerned.</p>
      <p>“His visa. Immigration found issues. He had to return to France.”</p>
      <p>“Oh no! Beta, I’m so sorry. These visa things are so complicated.” A pause. “Though I have to say—and I don’t mean this cruelly—maybe it’s for the best? He was so different from our world. All that activism, all those protests and political writings. How would that even work long-term? You living in his tiny apartment, him criticizing everything about how we live?”</p>
      <p>“You did this.”</p>
      <p>“Beta, I didn’t do anything. Immigration does what it does. These French activists, they have complicated histories. Sometimes it catches up with them.” Her voice softened. “I know it hurts now. But you’ll see—this was going to end badly anyway. Better now than two years from now when you’re even more attached.”</p>
      <p>Her father never mentioned Jean-Luc. Not once.</p>
      <p>Just saw her at breakfast during Diwali break: “Focus on school. Finish strong.”</p>
      <p>That was all.</p>
      <p>-----</p>
      <hr>
      <h2>Mumbai - Age 22</h2>
      <p>Coming home felt like stepping back into a cage she’d temporarily forgotten was locked.</p>
      <p>The Malabar Hill mansion was exactly as she’d left it—beautiful, pristine, heavy with unspoken rules and invisible surveillance. But Anya had made one condition before returning: she would not live under her parents’ roof. She wanted her own space, however illusory the independence might be. Her father, after a brief negotiation, relented—on the condition that her new apartment be in a “respectable” neighborhood with “appropriate” security. So she moved into a high-floor apartment in Bandra, sleek and modern, with a view of the sea and enough distance from Malabar Hill to pretend, for a few hours a day, that she was free.</p>
      <p>Her mother had redecorated her old bedroom in shades of cream and gold anyway, as if erasing the eighteen-year-old who’d left wasn’t enough—she had to overwrite the space entirely.</p>
      <p>Her father threw a welcome home party, inviting producers and directors and Bollywood’s elite, positioning his daughter as the next great Indian filmmaker. In TV interviews he talked about Anya next project, he said he might produce Anya’s film.</p>
      <p>Vikas was pragmatic however, he wanted Anya to learn the art. He didn’t give her the silver spoon, Anya first project was a low budget documentary.</p>
      <p>Priya was there too when Anya retuned — Priya twenty-four now, taller and fairer than Anya, with an artist’s grace in her movements. She’d spent the years while Anya was in New York establishing herself as a painter, showing in small galleries in Mumbai and Goa, building a reputation for ethereal landscapes that felt like memories of places that had never existed. She had their mother’s beauty but with something softer, less controlled.</p>
      <p>“You look exhausted,” Priya murmured, finding Anya on the terrace after the formal introductions were done. “New York didn’t agree with you?”</p>
      <p>“New York was fine. Coming back is the problem.”</p>
      <p>Priya studied her younger sister’s face. “What happened?”</p>
      <p>“The usual. I tried to have something of my own. Papa destroyed it.” Anya’s voice was flat, carefully empty. “How about you? Still painting?”</p>
      <p>“Yes. Actually…” Priya hesitated, then: “I’m planning to go back to New York. There’s a gallery interested in showing my work. And I’ve met someone.”</p>
      <p>“Someone?”</p>
      <p>“Marco. He’s Italian, works in finance. Normal guy. Nothing to do with our world.” Priya’s voice dropped. “Don’t tell Papa yet. I’m waiting for the right time.”</p>
      <p>Anya looked at her sister—tall, beautiful, talented, planning her escape. “You’re getting out.”</p>
      <p>“I’m trying to. I don’t have your gifts, Anya. I’m not useful to him the way you are. Which means I might actually have a chance.” The guilt in Priya’s voice was real. “I’m sorry. I know that’s not fair.”</p>
      <p>“It’s not about fair. It’s about survival.” Anya touched her sister’s arm. “Get out. Marry your Italian. Build something good. Don’t feel guilty about it.”</p>
      <p>“What about you?”</p>
      <p>“I’m the one with grandmother’s gifts. I’m valuable. Which means I’m trapped.” She said it without self-pity, just cold assessment. “Go. Be free for both of us.”</p>
      <p>The film project materialized within months—a thriller about a young woman who discovers her family business is built on secrets that could destroy them all. Painfully autobiographical, though no one seemed to notice. Her father provided the financing, used his connections to assemble a crew, made it clear that his daughter’s debut would be a success whether the market wanted it or not.</p>
      <p>And Anya, because she was genuinely talented, because she’d learned her craft well, because she poured every ounce of her rage and grief into the work—began making something actually good.</p>
      <p>But her father’s control extended to her personal life in ways that made New York’s surveillance seem subtle by comparison.</p>
      <p>Every man she spoke to at industry parties was vetted, assessed, categorized as acceptable or problematic. Every date was monitored. Every late-night conversation was somehow known to her father by morning. She felt like she was eighteen again, except now the cage was bigger and more sophisticated and infinitely more inescapable.</p>
      <p>She dated a stand-up comedian for three months—a sharp-witted man from Delhi who performed at comedy clubs across Mumbai and had a small but devoted following online. He made her laugh in a way she hadn’t since before Kiara’s downfall, and for a while, she let herself believe that humor might be an antidote to her family’s poison. Her father approved at first—comedians were harmless, disposable, unlikely to ask inconvenient questions.</p>
      <p>But then the comedian started weaving subtle jabs into his sets: jokes about “old-money families who own the city,” punchlines about “men who smile while they ruin you,” bits that felt too close to home. After a particularly pointed show at a club in Lower Parel, her father summoned her.</p>
      <p>“He thinks he’s brave,” Vikash said, stubbing out his cigarette. “But bravery without power is just noise. And noise can be silenced.”</p>
      <p>The comedian’s gigs began drying up. Venues “forgot” to confirm bookings. His YouTube channel was hit with a wave of copyright strikes. Within two months, he was performing at open mics in Pune, then stopped posting altogether. Anya never heard from him again.</p>
      <p>“</p>
      <p>Then there was Rohan.</p>
      <p>Rohan Deshmukh—assistant director on her film, twenty-eight, with slicked-back hair and designer stubble and expensive cologne that didn’t quite mask something desperate underneath. Good-looking in a calculated way, charming on the surface, but Anya’s clairvoyant gifts caught something else: ambition without ethics, narcissism wrapped in flattery, the particular hunger of someone from a semi-criminal background who saw the Chandras as a path to legitimacy and wealth.</p>
      <p>Her father’s spies reported back that Rohan had connections to a small-time smuggling operation in Thane. Nothing major, but enough to show he wasn’t opposed to bending rules. That he came from a family that made their money through grey-market electronics and import-export schemes that didn’t quite withstand scrutiny.</p>
      <p>Vikash was cautiously interested. “At least this one understands how the real world works. Not like your idealistic French boy or your revolutionary screenwriter.”</p>
      <p>But Rohan had miscalculated the Chandra family’s sophistication.</p>
      <p>He asked Anya to dinner at Indigo Deli in Bandra. Ordered expensive wine, told stories designed to make him seem exciting and dangerous, touched her arm too frequently with hands that felt clammy and possessive.</p>
      <p>Through her empathic gift, Anya felt his intentions crystallizing—the plan forming in his mind with obvious, stupid clarity. He’d slip something into her drink. Nothing lethal, just enough to make her compliant, cloudy, unable to refuse when he took her somewhere private. He’d take photos, collect evidence, then approach Vikash Chandra with a simple proposition: marriage to his daughter, or the photos go public, destroying the family’s reputation.</p>
      <p>Blackmail disguised as romance. Extortion wrapped in courtship.</p>
      <p>It was so clumsy, so transparent, that Anya almost pitied him.</p>
      <p>Almost.</p>
      <p>She excused herself to the bathroom and texted her father a single word: Confirmed.</p>
      <p>Vikash’s men were efficient.</p>
      <p>Rohan never made it to the bathroom where he’d planned to add rohypnol to her wine glass. He was intercepted by two large men in expensive suits who walked him out through the kitchen with minimal fuss. The restaurant staff, well-compensated for their discretion, noticed nothing.</p>
      <p>Anya finished her meal alone, paid the bill, and went home.</p>
      <p>She never saw Rohan again. Her father’s men had been extremely clear: pack your bags, return to your village, and if you ever set foot in Mumbai again, you’ll leave on a stretcher. Rohan, sensibly, took the warning seriously.</p>
      <p>When Anya asked her father what had happened, Vikash simply smiled. “He wasn’t good enough for you. And he had very poor judgment about who he could threaten.”</p>
      <p>It should have felt like protection. Like a father looking out for his daughter.</p>
      <p>Instead it felt like ownership. Like a man guarding his property from other predators while still insisting on his right to control how that property was used.</p>
      <hr>
      <h2>Kartik Mehra - Age 25</h2>
      <p>Her father’s best friend was Aditya Joshi —god of Indian cricket, captain of the national team.</p>
      <p>Vikash Chandra threw a party to celebrate India’s World Cup victory. Ice sculptures shaped like cricket bats. Champagne fountains. Every Bollywood star and political figure worth knowing.</p>
      <p>She met Kartik Mehra at the party. He was destined to be the next God of cricket, she drooled. It was love at first sight except, Kartik was married with a small child.</p>
      <p>Anya was impetuous, she started flirting while the party worked its way. They has exchanged numbers, the next day, they were meeting clandestinely in Oberoi’s where the cricket team were put up.</p>
      <p>Anya sneaked in quickly, they made passionate love in the shower.</p>
      <p>Anya followed Kartik everywhere much to the chagrin of Vikas Chandra, Maya was a bit tolerant, but she knew Kartik was married and she had to get Anya out of Kartik Mehra’s love.</p>
      <p>But, Anya was getting tired of following him, Kartik would prefer to sometimes take his wife and daughter for tours and Anya would feel anger and revenge.</p>
      <p>Anya tried to make Kartik jealous by going out with other cricketers, Kartik was fuming.</p>
      <p>In the end, they were hysterically fighting, Kartik calling up guys Anya’s was dating and Anya calling up Kartik wife and ratting Aditya out.</p>
      <p>Vikas Chandra had to speak to the god of Indian cricket and request that he help Aditya come to his senses.</p>
      <p>Sunil Joshi did the job, Kartik Mehra, stopped texting and calling. Maya nurtured her daughter back to health.</p>
      <p>-----</p>
      <p>“</p>
      <p>Maya said “Beta, you’re twenty-six. Beautiful, talented, successful. But you keep choosing wrong.” Maya’s voice was gentle, non-judgmental. “The cinematographer who asked too many questions. The screenwriter who thinks wealth is evil. The criminal who tried to blackmail us. And now your father’s married best friend.”</p>
      <p>She said it factually, without cruelty.</p>
      <p>“You’re looking for something you can’t have. Men from our world are too powerful—dangerous. Men outside our world are too curious or too idealistic—dangerous. Married men end badly—always.” She paused. “So what’s left?”</p>
      <p>Anya said nothing.</p>
      <p>“Priya is settling down. That Italian, Marco. He’s nobody—middle class, normal job, no connections, no power. But she seems happy. Maybe you should think about that.”</p>
      <p>“You want me to marry down?”</p>
      <p>“I want you to be practical.” Maya squeezed her hand. “Not now—you’re young still, you have time. But think about it. What kind of life do you actually want? And what are you willing to compromise to get it?”</p>
      <p>-----</p>
      <h2>Age 28-30: The Waiting</h2>
      <p>Anya waited.</p>
      <p>She turned twenty-nine. Then thirty.</p>
      <p>Priya called from New York with news of her and Marco coming to India. Their mother made disapproving noises. Their father said very little—which meant he was calculating something but had decided Priya wasn’t worth fighting over. She was the normal daughter, the one without gifts, the one who could be allowed to escape because she wasn’t useful enough to keep.</p>
      <p>“Are you okay?” Priya asked during one call. “You sound… different.”</p>
      <p>“I’m fine.”</p>
      <p>“You sound dead, Anya. Like you’re not even there anymore.”</p>
      <p>“I’m here. I’m just accepting reality.”</p>
      <p>“That’s not accepting reality, that’s giving up—”</p>
      <p>“Same thing, in our family.” Anya kept her voice flat. “Enjoy Florence. I’ll come to the wedding.”</p>
      <p>She meant it kindly, but Priya heard it for what it was: goodbye to the sister she’d known. Anya was still alive, still functional, still breathing. But something essential had been extinguished.</p>
      <p>-----</p>
      <h2>Somewhere Else in Mumbai</h2>
      <p>Somewhere in Andheri, in a modest two-bedroom apartment with paint peeling from the ceiling and traffic noise constant through single-pane windows,</p>
      <p>He was forty-three. His children were teenagers now, living with their mother, he has last seen them a decade back.</p>
      <p>He an ordinary man was about to meet the blue blooded princess in a few months.</p>
    `,
  },
  {
    id: 4,
    title: 'Chapter 4: The Fashion Book Launch',
    slug: 'chapter-4',
    content: `
      <h2>The Tweet</h2>
      <p>Dilip Shrivastava sat in his Andheri apartment at 11 PM, scrolling through Twitter on his laptop, a habit that had become routine since he’d shut down the factory six months ago.</p>
      <p>Mumbai Pulse—his hyperlocal news website—was supposed to be his reinvention. Cover local events, build an audience, monetize through advertising. Simple. Except nothing about starting over at forty was simple.</p>
      <p>His timeline refreshed, and there it was: a retweet from Aditi Sengupta.</p>
      <p><em>Aditi Sengupta @AditiHistory</em><br>
      <em>RT @ManavHiranandani: Fashion book launch tomorrow at Hiranandani Business Park, Powai! Shefali Vasudeva discussing her new book “Threads of Identity: Indian Fashion & Cultural Memory.” Open to all. 5 PM. Come through!</em></p>
      <p>Dilip stared at the tweet longer than necessary.</p>
      <p>Aditi Sengupta. Corporate historian. Bengali. Married. And completely, devastatingly attractive in a way that made him feel like a teenager again despite being a divorced father of two.</p>
      <p>They’d met for coffee once—three weeks ago, ostensibly to discuss his website’s coverage of Mumbai’s industrial decline. She’d talked about archival research and labor histories while he’d tried not to stare at the way afternoon light caught in her hair. Nothing had happened. Nothing would happen. She was married, and he’d sworn off married women after the disaster with Nisha two years ago.</p>
      <p>But still.</p>
      <p>A book launch in Powai. Open to all. And Aditi would probably be there, wouldn’t she? She’d retweeted it. That meant something, right?</p>
      <p>Dilip looked down at his laptop, then at the clock. Tomorrow was Thursday. He had nothing scheduled except uploading some neighborhood crime updates to Mumbai Pulse.</p>
      <p><em>Work-cum-pleasure</em>, he told himself. <em>Content for the site. Networking. Legitimate reasons.</em></p>
      <p>He bookmarked the tweet and tried to sleep.</p>
      <p>-----</p>
      <h2>The Event</h2>
      <p>Hiranandani Business Park in Powai was a different Mumbai entirely.</p>
      <p>Dilip arrived at 4:45 PM, wearing jeans and his favorite blue t-shirt—the one with an embossed Buddha image in a circular frame across the chest. He’d bought it years ago at some hippie market in Goa, back when he still thought wearing spiritual imagery made him seem deep and meditative. Now, standing in the gleaming lobby, surrounded by glass and steel and people in clothes that probably cost more than his monthly rent, he wondered if he looked like a middle-aged man trying too hard.</p>
      <p>The journey itself had been an expedition. Powai felt like another country—this carefully planned, corporate enclave on Mumbai’s northeastern edge. For someone from Andheri, it required commitment. But for the South Bombay crowd? Dilip had overheard two women in the lobby laughing about it: “Manav made us come all the way to Powai! This is basically a picnic. I told my driver to pack snacks for the journey.”</p>
      <p>They’d said it with that particular SoBo mix of complaint and privilege—the kind that made a thirty-minute drive sound like a safari expedition.</p>
      <p>The auditorium was already half-full. Dilip scanned for Aditi—her familiar silhouette, her long hair, her presence. Nothing.</p>
      <p>He found a seat near the back and settled in, feeling the familiar weight of being out of place. Around him, the crowd was impeccably dressed—women in elegant kurtas and statement jewelry, men in tailored shirts, everyone speaking in that particular South Bombay English that came with international schooling and summer holidays in London.</p>
      <p>Dilip pulled out his phone and pretended to check emails.</p>
      <p>The event began promptly at 5 PM.</p>
      <p>Shefali Vasudeva—the author—was a striking woman in her fifties, wearing a silk sari and speaking with the kind of effortless authority that came from decades in fashion journalism. She talked about Indian textiles, about how clothing carried memory, about the politics of draping and stitching and adornment.</p>
      <p>Dilip understood maybe sixty percent of it.</p>
      <p>She mentioned <em>Balenciaga</em> and <em>Comme des Garçons</em> and <em>deconstructed silhouettes</em> and <em>sartorial resistance</em>, words that slid past him like water over glass. He took notes anyway—vague thoughts about covering the event for Mumbai Pulse, though he had no idea how to translate haute couture discourse into something his Andheri readers would care about.</p>
      <p>Aditi never appeared.</p>
      <p>By 6:15 PM, when Shefali finished and the moderator—Manav Hiranandani himself, resplendent in pink trousers and a lavender shirt—thanked everyone for coming, Dilip had accepted the obvious: Aditi wasn’t coming. She’d retweeted the event but hadn’t actually attended.</p>
      <p><em>Story of my life</em>, Dilip thought. <em>Always showing up for women who don’t show up for me.</em></p>
      <p>But there were snacks after, and Dilip was hungry, and he was already here, so he followed the crowd out of the auditorium into the adjacent atrium where caterers had laid out an impressive spread of Indian snacks—samosas, dhokla, pani puri stations, masala chai in tiny clay cups.</p>
      <p>The real socializing was happening here.</p>
      <p>-----</p>
      <h2>The After-Party</h2>
      <p>Dilip stood awkwardly near the pani puri station, holding a small plate of dhokla he wasn’t eating, watching people network with the ease of those who’d been doing this their entire lives.</p>
      <p>Clusters formed and reformed. Laughter echoed off glass walls. Business cards were exchanged. Manav Hiranandani floated through the crowd like a pink-clad diplomat, hugging people, introducing strangers, making everything feel effortless.</p>
      <p>Dilip felt profoundly alone.</p>
      <p>He was about to leave—make some excuse to himself about early morning deadlines—when he saw her.</p>
      <p>She was standing maybe fifteen feet away, near the samosa table, holding a small plate and talking to no one.</p>
      <p>Or rather, she’d been talking to someone—a middle-aged woman in a Kanjeevaram sari—but that woman had drifted away, and now the girl stood alone, looking slightly lost in the way that beautiful women sometimes do at parties, surrounded by people but untethered.</p>
      <p>Dilip’s breath caught.</p>
      <p>She was young—<em>too young</em>, his mind supplied immediately. Early twenties, maybe? Definitely not thirty. She had that polished, expensive look that screamed South Bombay—the kind of girl who’d grown up in Malabar Hill or Cuffe Parade, attended international schools, spent summers in Europe.</p>
      <p>Her dress was simple but clearly expensive—a sleeveless black shift with a circular mandala pattern embroidered in silver thread across the chest. It reminded him, absurdly, of his Buddha t-shirt. Except where his was cheap cotton tourist kitsch, hers was couture—silk, probably, or some fabric he didn’t know the name for.</p>
      <p>She wore a delicate silver necklace that caught the light when she moved. Her hair was pulled back in a simple ponytail. Her skin seemed to glow—not makeup exactly, but something deeper, something inherent.</p>
      <p>And her legs.</p>
      <p>She was wearing a short skirt—knee-length, modest by Western standards but striking here—and her legs were bare and gleaming under the atrium’s lights, slender and perfect in a way that made Dilip forget momentarily that he was forty years old and definitely, definitely too old to be staring at a girl who looked barely legal.</p>
      <p>He couldn’t look away.</p>
      <p>There was something about her—beyond the obvious beauty, beyond the expensive clothes and the South Bombay polish. Something vulnerable. She looked lost, almost, standing there alone with her plate of food, her eyes scanning the crowd without quite engaging.</p>
      <p><em>She looks lonely</em>, Dilip thought. <em>In a room full of people, she looks completely alone.</em></p>
      <p>And that resonated with something deep in his chest—the recognition of another person who didn’t quite fit, who was performing presence while feeling absent.</p>
      <p>He wanted to talk to her.</p>
      <p><em>Don’t be an idiot</em>, his rational mind supplied. <em>She’s twenty years younger than you. She’s clearly from a completely different world. You’re wearing a Buddha t-shirt to a fashion book launch. What are you going to say?</em></p>
      <p>But he kept staring.</p>
      <p>And then—impossibly—she seemed to notice him staring.</p>
      <p>Not directly. She didn’t make eye contact. But something in her posture shifted, a subtle awareness, as if she’d registered his presence on some instinctual level. Her head tilted slightly, not toward him but not away either.</p>
      <p>It was the strangest thing. Dilip felt <em>seen</em>—not by her eyes, which remained carefully averted, but by something else. Some sixth sense she possessed.</p>
      <p><em>You’re imagining things</em>, he told himself. <em>She doesn’t know you exist.</em></p>
      <p>But he couldn’t shake the feeling that she did. That somehow, impossibly, she was aware of him watching her, even though she gave no outward sign.</p>
      <p>The moment stretched.</p>
      <p>And then—</p>
      <p>“Dilip! Yaar, what are you doing here?”</p>
      <p>Dilip spun around.</p>
      <p>Rohit Malhotra from his Andheri neighborhood stood there, grinning, holding a plate piled with samosas. Behind him were Priya and Sachin—the couple from the building next to his—also smiling with surprised recognition.</p>
      <p>“I didn’t know you were into fashion!” Priya said, laughing. “This seems so unlike you.”</p>
      <p>“Research,” Dilip managed. “For the website. Mumbai Pulse. You know—covering local events.”</p>
      <p>“Right, right,” Rohit said. “How’s that going? You making money yet?”</p>
      <p>They surrounded him—friendly, chatty, oblivious to the fact that they were completely destroying his chance to approach the beautiful stranger near the samosa table.</p>
      <p>Dilip tried to maintain eye contact with his neighbors while surreptitiously glancing past them toward where the girl had been standing.</p>
      <p>She was still there. Still alone. Still holding her plate.</p>
      <p>And now, impossibly, she was looking in his direction.</p>
      <p>Not at him directly—but at the group around him. Assessing. Curious.</p>
      <p>Her expression was unreadable. Polite interest, maybe. Or mild curiosity about why this middle-aged man in a Buddha t-shirt had drawn such enthusiastic attention from his neighbors.</p>
      <p>Dilip felt something flutter in his chest—hope, maybe, or just the pathetic desire to seem interesting to someone completely out of his league.</p>
      <p>“So Powai, huh?” Sachin was saying. “Long way from Andheri for you.”</p>
      <p>“Not that far,” Dilip replied automatically, still watching the girl from the corner of his eye. “Twenty minutes if traffic’s good.”</p>
      <p>Priya launched into some story about attending another event here last month—something corporate, boring—and Dilip nodded along while his attention stayed fixed on the stranger.</p>
      <p>She had moved slightly, closer to Manav Hiranandani now. They seemed to know each other—Manav touched her arm briefly, said something that made her smile, then drifted away to greet other guests.</p>
      <p><em>She knows Manav</em>, Dilip noted. <em>That’s useful information. Maybe.</em></p>
      <p>But his neighbors showed no signs of releasing him. They talked about the neighborhood, about local politics, about some water shortage issue that Dilip should really cover on his website. Rohit was particularly enthusiastic, standing close, blocking Dilip’s view of the rest of the room.</p>
      <p>Within minutes, a small crowd had formed around Dilip—neighbors from Andheri who recognized him, who liked him, who wanted to catch up and talk about local issues and complain about BMC corruption.</p>
      <p>In Andheri, Dilip was someone. Known. Respected. The guy who ran that local news site, the guy who’d inherited a factory from his father, the guy people went to when they needed something publicized.</p>
      <p>But here, surrounded by his admirers, he felt trapped.</p>
      <p>He kept trying to look past them, to catch another glimpse of the girl in the black dress, but the crowd was thick now, bodies shifting, blocking his view.</p>
      <p>By the time his neighbors finally released him—twenty minutes later, after exchanging phone numbers and promising to grab chai sometime—the girl was gone.</p>
      <p>Dilip scanned the atrium desperately. Near the exit, he caught a flash of black fabric, a silver necklace catching light. But by the time he pushed through the crowd, she’d vanished into the Mumbai evening.</p>
      <p>He stood alone in the now-thinning party, holding his melted dhokla, feeling like he’d missed something important.</p>
      <p><em>Who was she?</em></p>
      <p>-----</p>
      <h2>The Investigation</h2>
      <p>Dilip couldn’t sleep.</p>
      <p>He lay in his bed in the Andheri apartment—small, cluttered, decorated with furniture he’d bought during his first marriage and never bothered to replace—staring at his phone.</p>
      <p>At 1 AM, he gave up and opened Twitter.</p>
      <p>Manav Hiranandani had to post something. People like Manav always posted after events—pictures, thank-yous, tags. It was how that world worked.</p>
      <p>Dilip scrolled through Manav’s timeline obsessively.</p>
      <p>Nothing at midnight.</p>
      <p>Nothing at 12:30.</p>
      <p>At 1:15 AM, finally:</p>
      <p><em>Manav Hiranandani @ManavHiranandani</em><br>
      <em>Fabulous evening discussing fashion & memory with @ShefaliVasudeva! So grateful to everyone who came through—especially those who made the trek to Powai! Special shoutout to @AnyaChandra for the fascinating conversation about textile symbolism. More events coming soon! 📚✨</em></p>
      <p>Attached: A photo of Manav with several people, including—</p>
      <p>Her.</p>
      <p>Dilip’s heart stopped.</p>
      <p>She was standing slightly apart from the main group, elegant and reserved, her expression polite but distant. The silver necklace gleamed in the flash. The black dress looked even more expensive in the photograph.</p>
      <p>And she was tagged: @AnyaChandra</p>
      <p>Dilip clicked the name with shaking fingers.</p>
      <p>The profile loaded: <em>Anya Chandra. Filmmaker. Mumbai.</em></p>
      <p>The bio was minimal. The account was private—only 300 followers. The profile picture wasn’t her face at all—it was a striking piece of street art: a graffiti rendering of a Koli fisherwoman, her head balanced under a large wicker basket overflowing with fish, painted in vibrant blues and silvers against a weathered wall. It was beautiful, haunting, completely unexpected.</p>
      <p><em>A filmmaker who uses street art of fisherwoman as her profile picture</em>, Dilip thought. <em>Not some glamorous headshot or festival red carpet. Something real.</em></p>
      <p>But the name—</p>
      <p>Chandra.</p>
      <p>Dilip stared at the screen.</p>
      <p><em>Chandra. Anya Chandra.</em></p>
      <p>He opened a new tab and Googled: <em>“Vikash Chandra daughter”</em></p>
      <p>The results loaded slowly.</p>
      <p>There wasn’t much—the Chandras were famously private, avoided media attention, kept their family life completely sealed from public scrutiny. But there were fragments: society page mentions, a few carefully controlled photographs from charity events, business magazine profiles that mentioned Vikash Chandra had two daughters.</p>
      <p>One article from Mumbai Mirror, buried in a 2009 archive, mentioned: <em>“Vikash Chandra’s daughter Anya recently graduated from NYU’s Tisch School of the Arts and is reportedly working on film projects.”</em></p>
      <p>Another, from a 2011 trade magazine: <em>“Emerging filmmaker Anya Chandra, daughter of businessman Vikash Chandra, is developing documentary work exploring Mumbai’s urban communities.”</em></p>
      <p>There were no details about releases, no festival mentions, nothing concrete about her actual work. Just vague references to “projects” and “development.” As if her career existed in some perpetual state of potential rather than achievement.</p>
      <p>Dilip sat back against his pillow, mind racing.</p>
      <p>Vikash Chandra’s daughter.</p>
      <p>The Vikash Chandra—one of Mumbai’s most powerful, most secretive, most untouchable businessmen. The man whose name came up in whispered conversations about who really ran the city. The man politicians feared, journalists didn’t investigate, and rivals didn’t cross.</p>
      <p>That Chandra.</p>
      <p>And his daughter looked like <em>that</em>? Young, vulnerable, lost at a book launch party?</p>
      <p>Dilip had imagined—if he’d ever thought about Vikash Chandra’s family at all—that his children would be intimidating. Hardened. Sophisticated in that cold, unreachable way that came with that level of wealth and power.</p>
      <p>Not this girl with her lonely eyes and her delicate silver necklace, standing alone near a samosa table looking like she needed someone to talk to.</p>
      <p>The cognitive dissonance was staggering.</p>
      <p><em>She’s thirty</em>, Dilip realized suddenly, doing the math. If she’d graduated from NYU in 2009, she must have been around 22 then. Which made her about 30 now. Not nineteen or twenty-one like he’d assumed. Thirty.</p>
      <p>Still ten years younger than him. Still completely, impossibly out of his league.</p>
      <p>But thirty. An adult. A woman, not a girl.</p>
      <p>Dilip scrolled back to Manav’s photo, zooming in on her face.</p>
      <p>There was something in her expression—even in this candid shot—that struck him as profoundly sad. Not obviously unhappy. Just… weary. Like someone performing contentment while feeling something else entirely underneath.</p>
      <p>He thought about how she’d stood alone at the party. How she’d seemed aware of him without looking at him. That strange, impossible sense of being <em>seen</em> by someone who wasn’t looking.</p>
      <p>He clicked back to her profile, staring at that graffiti image—the Koli fisherwoman with her basket of fish. There was something defiant about choosing that image. Something that said: <em>I’m not what you expect. I’m not the typical South Bombay princess.</em></p>
      <p><em>You’re being ridiculous</em>, he told himself. <em>She’s Vikash Chandra’s daughter. She lives in a different universe. You’re a divorced forty-year-old running a failing local news website from an Andheri apartment. What are you even thinking?</em></p>
      <p>But he couldn’t stop staring at her photograph.</p>
      <p>At 2 AM, exhausted and slightly delirious, Dilip whispered to his empty bedroom: “Anya Chandra. What are you doing in my head?”</p>
      <p>The apartment offered no answer.</p>
      <p>Outside, Mumbai hummed its endless nighttime symphony—traffic, trains, construction, the infinite city breathing in the darkness.</p>
      <p>And somewhere in Bandra, in a high-rise apartment overlooking the sea, Anya Chandra lay awake as well, staring at her own ceiling, thinking about the man in the Buddha t-shirt who’d stared at her with such obvious, helpless longing.</p>
      <p>She had felt him. Of course she had. Her empathic gifts made that impossible to miss—the sudden spike of attraction, the confusion, the desire mixed with self-doubt.</p>
      <p>She’d cast no intentional spell. Just existed. And he’d been drawn to her like a moth to flame, exactly as her parents had planned.</p>
      <p><em>Find an ordinary man</em>, her mother had said six months ago. <em>Someone safe. Someone controllable. Someone who’ll be grateful for the opportunity rather than entitled to your family’s wealth.</em></p>
      <p>And tonight, at a book launch she’d only attended because Manav had insisted, she’d found him.</p>
      <p>Or rather, he’d found her.</p>
      <p>Dilip Shrivastava. Age 40. Divorced. Owner of some hyperlocal news website. Upper-middle-class but fading, respectable but not threatening, decent but controllable.</p>
      <p>Her father’s investigators would vet him thoroughly. They probably already were.</p>
      <p>But Anya already knew he’d pass. Because he was perfect for what they needed: ordinary enough to seem like her choice, but desperate enough to be managed.</p>
      <p>She felt something twist in her chest—guilt, maybe, or just exhaustion at yet another manipulation, another performance, another relationship that would be arranged and monitored and ultimately controlled by forces neither of them could escape.</p>
      <p><em>But maybe</em>, a small voice whispered in her head, <em>maybe he could be different. Maybe ordinary is what you need. Maybe someone who doesn’t know your world can’t be destroyed by it.</em></p>
      <p>She almost laughed at the delusion.</p>
      <p>Anya Chandra—thirty years old, heir to supernatural gifts she couldn’t refuse, daughter of parents who’d orchestrated every significant moment of her life—turned over in bed and tried to sleep.</p>
      <p>And failed.</p>
      <p>Because somewhere in Andheri, a man she’d never spoken to was dreaming about her skin, her legs, her sadness.</p>
      <p>And the spell—unintentional but no less powerful—had already taken hold.</p>
    `,
  },
  {
    id: 5,
    title: 'Chapter 5: The Three Meetings',
    slug: 'chapter-5',
    content: `
      <h2>The Discovery</h2>
      <p>Three days after the fashion book launch, Dilip was lying in bed at 2 AM, obsessively scrolling through Twitter, when he saw it.</p>
      <p><em>Manav Hiranandani @ManavHiranandani</em><br>
      <em>Fabulous evening discussing fashion & memory with @ShefaliVasudeva! Special shoutout to @AnyaChandra for the fascinating conversation about textile symbolism.</em></p>
      <p>There was a photo. And she was tagged.</p>
      <p>He clicked: @AnyaChandra. Private account. Bio: <em>Filmmaker. Mumbai.</em> Profile picture: street art of a Koli fisherwoman.</p>
      <p><em>Anya Chandra.</em></p>
      <p>And then it hit him like a punch to the chest.</p>
      <p>The email.</p>
      <p>He’d sent that email months ago. Back when he’d seen Vikash Chandra’s tweet about his daughter’s documentary work. He’d written to anya.chandra.films@gmail.com asking about featuring her project.</p>
      <p>She’d replied. Politely declined. Said she’d pass his details along.</p>
      <p>And then he’d forgotten about it. Moved on. Until now.</p>
      <p><em>She knew who I was. At the fashion launch. When I was staring at her. She already knew.</em></p>
      <p>The realization made his skin prickle. She’d received his email months ago, seen his name, his website, probably looked him up. And then, weeks later, she’d shown up at that event, stood alone near the samosa table, been aware of him watching her.</p>
      <p>She’d known exactly who he was all along.</p>
      <p>Six days later, Rajesh Mehta from Cafe Mangi—a popular chain across Andheri—called him about advertising. One lakh fifty thousand for six months.</p>
      <p>Dilip walked out of that meeting in a daze.</p>
      <p>The timing was strange. He’d emailed Anya. She’d said she’d recommend him. And now this.</p>
      <p><em>Was there a connection?</em></p>
      <p>He searched online. Found nothing linking Cafe Mangi to the Chandras.</p>
      <p><em>Just good luck</em>, he told himself. <em>Finally.</em></p>
      <p>But the doubt lingered.</p>
      <p>-----</p>
      <h2>The Devdutt Talk</h2>
      <p><em>Manav Hiranandani @ManavHiranandani</em><br>
      <em>BIG EVENT! Devdutt Pattanaik discussing mythology at Hiranandani Business Park next Saturday! 5 PM. Don’t miss! 🕉️</em></p>
      <p>Dilip’s heart jumped. <em>She might be there.</em></p>
      <p>He RSVP’d immediately.</p>
      <p>Saturday arrived. He changed clothes twice, settling on dark jeans and a black shirt. The venue was enormous—proper auditorium, stadium seating. He found a seat in the middle section and scanned the crowd nervously.</p>
      <p>She wasn’t there.</p>
      <p>By 5 PM, the auditorium was filling up. Dilip had given up hope when, at exactly 4:58, someone slid silently into the seat beside him.</p>
      <p>He turned.</p>
      <p>Anya.</p>
      <p>Jeans, simple blue kurta, sneakers. Hair in a messy bun. A small smile playing at her lips—mischievous, like she’d pulled off a perfect prank.</p>
      <p>“I’m Dilip.”</p>
      <p>“I know. Anya.” She held out her hand.</p>
      <p>They shook hands. Her grip was light, brief.</p>
      <p>“I am the one who emailed. About the documentary and Mumbai Pulse collaboration .”</p>
      <p>On his other side, a boy around thirteen was already seated with his mother. The woman kept glancing at Anya, clearly recognizing her.</p>
      <p>“Excuse me,” the woman leaned across her son. “Are you Anya Chandra?”</p>
      <p>Anya smiled politely. “Yes.”</p>
      <p>“Oh my god! Aditya, do you know who this is?” She was speaking too loudly. “I just think what your family does is so wonderful.”</p>
      <p>The boy—Aditya—looked embarrassed. “Mum, please.”</p>
      <p>Finally, the woman left Aanya alone, Dilip seized the opportunity before they get interrupted again, he asked for her number, she hesitated for a moment and then passed it to Dilip.</p>
      <p>At exactly 5 PM, the lights dimmed.</p>
      <p>Manav Hiranandani appeared on stage wearing flowing silk pants in burgundy and a cream kurta, delicate silver chains at his neck.</p>
      <p>“Welcome! Tonight, the wonderful Devdutt Pattanaik!”</p>
      <p>The talk began. Devdutt spoke about mythology, gender, ancient texts.</p>
      <p>Dilip tried to focus. But he was mostly aware of Anya beside him.</p>
      <p>Ten minutes into the talk, she started shaking her leg.</p>
      <p>Just for a minute or two. A slow, deliberate movement. Her knee brushed his once.</p>
      <p>Dilip glanced at her. She was looking straight ahead, expression perfectly neutral.</p>
      <p>But there was something in her stillness—an awareness. She knew exactly what she was doing.</p>
      <p>Then she stopped. Went completely still. The moment passed.</p>
      <p>The talk ended ninety minutes later. Lights came up.</p>
      <p>Dilip turned to say something—</p>
      <p>But a tall woman appeared. Elegant, sharp features, expensive jewelry.</p>
      <p>“Anya.”</p>
      <p>“Meera, hi.” Anya stood.</p>
      <p>Dilip noticed she didn’t introduce him. The two women moved away together, voices low, immediately absorbed in their own conversation about jewelry designs and some exhibition. Dilip couldn’t hear what they were saying.</p>
      <p>Meanwhile the Dhirubhai Ambani School boy knew Dilip and starting asking all startup related questions about Mumbai Pulse. Like what were his growth plans, what was his CAC/LTV”</p>
      <p>Dilip was amused, a 13 year old boy from Dhirubhai is so intelligent, at 13 he only wanted to peek up a woman’s skirt.</p>
      <p>A few neighbors spotted Dilip. Quick hellos. “Good talk.” “See you around.”</p>
      <p>By the time Dilip looked back, Anya was already at the exit.</p>
      <p>He walked to his car, feeling like he’d been part of some elaborate prank orchestrated with Manav’s help. She’d known he’d be there. She’d planned this surprise entrance.</p>
      <p>But in his phone, he had her number. That was something.</p>
      <p>-----</p>
      <h2>The Art Exhibition</h2>
      <p>Two weeks later, another tweet:</p>
      <p><em>Manav Hiranandani @ManavHiranandani</em><br>
      <em>AMAZING art happening this Saturday! Factory conversion in Lower Parel—emerging artists, installations, live music. 6 PM onwards. Come see real Mumbai creativity! 🎨🎸</em></p>
      <p>Dilip saw it on Thursday evening. Another Manav event. Another chance she might be there.</p>
      <p>He RSVP’d.</p>
      <p>Saturday evening, he arrived at the venue—an old textile factory building in Lower Parel, now converted into a temporary gallery space. Exposed brick walls, industrial lighting, art installations scattered across the cavernous floor. A small stage at one end where a rock band was doing sound check.</p>
      <p>The crowd was young, artsy, dressed in that deliberately casual way that somehow cost money. Dilip felt out of place in his simple jeans and shirt.</p>
      <p>He wandered through the installations, pretending to appreciate abstract sculptures and paintings he didn’t understand. Kept scanning for Anya.</p>
      <p>She wasn’t there.</p>
      <p>At 6:45, he was standing near a large canvas—splashes of red and black—when he felt something shift in the room’s energy.</p>
      <p>People’s voices dropped slightly. Heads turned, then deliberately turned away.</p>
      <p>Someone important had arrived.</p>
      <p>Dilip looked toward the entrance.</p>
      <p>Manav Hiranandani was there, wearing a flowing emerald silk kurta with intricate gold embroidery and matching jewelry, gesturing expansively as he showed three people around. A man in his late forties, compact and controlled in an expensive charcoal suit. A woman beside him, elegant and striking, her fairness almost luminous under the industrial lights. And a younger woman—mid-twenties, taller and fairer than Anya, with an artist’s grace in her movements.</p>
      <p>The man walked with absolute confidence. Not arrogant, just certain of his place in any room.</p>
      <p>Manav was playing host, guiding them through the installations, explaining pieces with theatrical enthusiasm.</p>
      <p>And the man was walking in Dilip’s general direction.</p>
      <p>As he got closer, Dilip felt an unexpected warmth radiating from him. The man’s presence wasn’t cold or intimidating—it was magnetic, almost friendly. He had an ease about him, a confidence that felt welcoming rather than threatening.</p>
      <p><em>What positive vibes</em>, Dilip thought, slightly dazed.</p>
      <p>The man passed within a few feet of him. Their eyes met for a fraction of a second. The man’s expression was neutral, assessing, but not hostile.</p>
      <p>Then he moved on, Manav still talking animatedly beside him, the two women following quietly.</p>
      <p>The older woman glanced back at Dilip. Her face was pale, worried. Her eyes lingered on him for a moment too long before she looked away, as if she wanted to say something but couldn’t.</p>
      <p>The younger woman—who looked so much like Anya but taller, fairer—didn’t look at him at all. Just followed, speaking quietly to her mother.</p>
      <p>Dilip stood frozen, trying to process what had just happened.</p>
      <p>He pulled out his phone, opened Twitter, searched: <em>Vikash Chandra</em></p>
      <p>The images loaded. The man from moments ago stared back at him from the screen.</p>
      <p><em>Oh god. That was Vikash Chandra.</em></p>
      <p>Vikash Chandra. Anya’s father. One of Mumbai’s most powerful men. And he’d walked straight toward Dilip, close enough to touch, radiating this strange warmth that felt almost deliberate.</p>
      <p>And the woman who’d looked worried—that must have been Maya Chandra, Anya’s mother.</p>
      <p>And the younger woman who looked like a taller, fairer version of Anya—that had to be Priya, the sister from New York.</p>
      <p>Dilip scanned the room again. <em>Where’s Anya?</em></p>
      <p>She wasn’t here. Just her entire family, showing up at an art event hosted by Manav, walking past him, checking him out.</p>
      <p><em>This can’t be coincidence.</em></p>
      <p>The Chandras stayed for forty-five minutes. Vikash spoke briefly with the gallery organizers, looked at a few paintings with studied interest, asked Manav intelligent questions about the artists. Maya and Priya followed, graceful and composed. Then they departed as smoothly as they’d arrived, Manav escorting them to their car with elaborate farewells.</p>
      <p>The older woman—Maya—glanced back once more at Dilip before she left. That same worried expression. As if she wanted to say something but couldn’t. As if she knew something he didn’t.</p>
      <p>After they left, the room’s energy shifted back to normal. Conversations resumed their previous volume. The rock band started their set.</p>
      <p>Dilip stayed for another hour, but his mind was elsewhere.</p>
      <p><em>Why were they here? Why did Vikash walk straight toward me? Why did Maya look worried? Why was Priya—who looked so much like Anya—pretending I didn’t exist? And where was Anya?</em></p>
      <p>He left around 9 PM, driving back to Andheri in a daze.</p>
      <p>At home, he sat on his bed and stared at his phone.</p>
      <p>He wanted to text Anya. Ask her what that was about. Ask her if her family knew about him, if they’d come to the exhibition specifically because he’d RSVP’d.</p>
      <p>But what would he say? <em>Hey, your dad showed up at an art show and walked near me and it felt really weird?</em></p>
      <p>That sounded paranoid. Delusional.</p>
      <p><em>Maybe it was just coincidence</em>, he told himself. <em>Rich people go to art shows. The Chandras support culture. This doesn’t have to be about you.</em></p>
      <p>But Vikash Chandra’s presence had felt too deliberate. That walk straight toward him. That brief eye contact. The positive energy that had felt almost staged—like Vikash wanted Dilip to feel welcomed, approved of.</p>
      <p>And Maya’s worried face. That felt real. Unscripted.</p>
      <p>Dilip fell asleep that night with more questions than answers, wondering what game he’d accidentally stumbled into.</p>
      <p>-----</p>
      <h2>The Bank Crisis and the Coffee</h2>
      <p>Two weeks later, Dilip’s father’s debts caught up with him. The bank issued a show cause notice on the family house in Andheri. The accumulated loans, the guarantees he’d signed for relatives who’d never paid back, the money borrowed for failed ventures—all of it had finally come due.</p>
      <p>Dilip had to sell. Pay the bank, pay relatives, send money to his mother and sister.</p>
      <p>After everything was settled, enough remained for a deposit on a small flat in Bandra.</p>
      <p>Bandra. Where Bollywood stars lived. Where coffee cost two hundred rupees. Where people spoke English more than Hindi.</p>
      <p>It felt aspirational. Ambitious. Like maybe he was finally becoming someone.</p>
      <p>His friends thought he was insane. “Bandra? Why? Your entire readership is in Andheri!”</p>
      <p>Dilip didn’t tell them the truth: <em>Because I want to be closer to her world.</em></p>
      <p>He moved in mid-May.</p>
      <p>Dilip, now in Bandra, tnis is where Anya also loved, he think he should grab a coffee with Aanya, he emails her. </p>
      <p><strong>Dilip:</strong> <em>Would you want to grab coffee sometime to catch up??</em></p>
      <p>No response for three days.</p>
      <p>He repeats the email two more times. </p>
      <p>He tried again: <em>Just to catch up.</em></p>
      <p>Still nothing.</p>
      <p>On the fourth email, Dilip is persistent: </p>
      <p>Finally there is a reply: <strong>Anya:</strong> <em>Sorry. Been busy. July 4th, 4 PM? Gloria Jean’s in Bandra?</em></p>
      <p>Fifteen days away. But she’d responded.</p>
      <p><strong>Dilip:</strong> <em>Yes. See you then.</em></p>
      <p>-----</p>
      <p>July 4th arrived.</p>
      <p>Dilip got to Gloria Jean’s at 3:45, wearing a black Puma t-shirt and brown cotton pants. Casual but neat.</p>
      <p>The café was strangely packed. Every table occupied. People shoulder-to-shoulder. The noise level was chaotic for a Tuesday afternoon.</p>
      <p><em>This is strange</em>, he thought. <em>Why is it so full?</em></p>
      <p>He scanned for empty seats. Found none. Then spotted Anya at a corner table.</p>
      <p>She was already there, fifteen minutes early, wearing a black top and brown pants.</p>
      <p><em>Brown pants. Black top. We’re matching again.</em></p>
      <p>He walked over. “Hi.”</p>
      <p>She looked up. “She asks him whether he would like to grab his coffee, he asks her if she wants one, she says no.”</p>
      <p>Dilip joined the queue, He ordered a latte, waited, kept glancing back at Anya to make sure she was real. The café was absurdly full. Everyone engrossed in conversations, laptops, phones. No one looking at them.</p>
      <p><em>It feels staged.</em></p>
      <p>Seated now, Dilip stares at her, she stares him down, she is saying, that’s not proper etiquette in her mind.</p>
      <p>She breaks the ice, dilip has no idea, on what to to talk, his world is very small.Anya knows about the same. She eases in , and makes small talk. </p>
      <p>They talk about some other people who are writing about culture in the city. </p>
      <p>Aanya does most of the talking, she asks him about his family, his sister. </p>
      <p>After about 30 minutes she checks her watch. “I should go.”</p>
      <p>“Okay.”</p>
      <p>She stood. He stood. They looked at each other.</p>
      <p>Neither said anything.</p>
      <p>She walked toward the exit. He saw her eyes were slightly wet, her cheeks flushed pink.</p>
      <p><em>Allergies</em>, he thought. <em>Or something else.</em></p>
      <p>He watched her get into a wine red SUV outside. The door closed. The vehicle pulled away.</p>
      <p>He walked past where she’d been standing, heading to his own car, feeling hollow.</p>
      <p>And then he noticed: everyone was leaving.</p>
      <p>Within five minutes, the entire café had cleared. Tables occupied for their whole conversation were suddenly empty. The barista looked confused and relieved.</p>
      <p><em>It was staged. All of it. Vikash Chandra filled this place with extras.</em></p>
      <p>The realization was chilling.</p>
      <p><em>What am I getting into?</em></p>
      <p>-----</p>
      <h2>The Confession</h2>
      <p>That night, Dilip wrote a love letter.</p>
      <p>He’d never written one before. Never been the kind of man who put feelings into words. But something about the afternoon—about Anya’s tears, her flushed cheeks, the way she’d looked at him before leaving—demanded expression.</p>
      <p>He wrote for two hours. Deleted everything. Started again.</p>
      <p>By midnight, he had something. Not poetry. Not sophisticated prose. Just honest, clumsy truth about not being able to stop thinking about her, about feeling alive for the first time in years, about seeing her in a way no one else seemed to.</p>
      <p>It wasn’t good. Rambling, too intense, probably embarrassing.</p>
      <p>He saved it to his phone and texted her next day at 1 PM.</p>
      <p><strong>Dilip:</strong> *Hey. I need to tell you something. Can I call you?*</p>
      <p>He didn’t expect a response. It was 1 AM. She was probably asleep.</p>
      <p>His phone buzzed almost immediately.</p>
      <p><strong>Anya:</strong> *Give me 10 minutes. I’ll call you.*</p>
      <p>At 1:12 PM, his phone rang.</p>
      <p>“Hello?”</p>
      <p>“Hi.” Her voice was soft, intimate. “What did you want to tell me?”</p>
      <p>“I—can I read you something? I wrote—it’s going to sound stupid, but just—can I just read it?”</p>
      <p>“Okay.”</p>
      <p>Dilip opened the letter on his phone. His hands were shaking.</p>
      <p>He read it aloud. Every word. Every embarrassing confession. His voice cracking slightly.</p>
      <p>When he finished, there was silence on the other end.</p>
      <p>Long, terrible silence.</p>
      <p>“Anya?”</p>
      <p>“I’m here.” Her voice was thick, strange. “But I’m leaving for New York next week.”</p>
      <p>His stomach dropped. “What?”</p>
      <p>“To stay with my sister. She needs help settling in, and I—I need some space from Mumbai. From everything here.” She took a breath. “And I have a boyfriend there. In New York. ”</p>
      <p>Dilip sat on his bed, phone still in his hand, feeling like he’d been punched in the stomach.</p>
      <p>At 1:47 AM, his phone buzzed.</p>
      <p><strong>Anya:</strong> *I’m not too young. I’m 30.*</p>
      <p>Just that. One text. No explanation.</p>
      <p>Dilip stared at it.</p>
      <p>She’d hung up on him. Said she had a boyfriend. Said she was leaving.</p>
      <p>And then texted to clarify her age. To correct his assumption. To make sure he knew she was thirty, not younger, not inappropriate.</p>
      <p><em>Why does that matter if you’re leaving? If you have a boyfriend? If this can’t happen?</em></p>
      <p>But he didn’t text back. Didn’t know what to say.</p>
      <p>Just lay back on his bed and stared at his ceiling, feeling simultaneously crushed and confused and strangely, inexplicably hopeful.</p>
      <p>Because she’d corrected him. Because her eyes had been watery. Because her voice had cracked when she said *“I have to go.”*</p>
      <p>Something wasn’t right. Something in the story didn’t fit.</p>
      <p><em>I’m not too young. I’m 30.</em></p>
      <p>-----</p>
      <h2>Meanwhile, in Mumbai</h2>
      <p>The next morning, Anya sat in the Malabar Hill mansion dining room. Her parents were at breakfast—her father behind the Economic Times, her mother scrolling through her phone with her chai.</p>
      <p>“Beta, we need to talk about this Dilip,” Maya said without looking up.</p>
      <p>Anya’s hand froze on her teacup.</p>
      <p>“Your father had him investigated,” Maya continued, her voice measured. “Clean record, decent background. Upper middle class family, inherited business.”</p>
      <p>Vikash lowered his newspaper slightly. “Not ambitious enough. Too comfortable with mediocrity. Running a small website when he could be doing much more.”</p>
      <p>“We had hopes,” Maya said, finally looking at her daughter. “A normal man, someone outside our world, someone who might give you stability. But he seems too laid back. Not driven. He’s not going to make anything of his career.”</p>
      <p>“You don’t know that,” Anya said quietly.</p>
      <p>“We know enough.” Vikash’s voice was flat. “He sold his family house to pay debts. Moved to a smaller flat in Bandra. He’s sliding down, not climbing up. That’s not someone who can handle the complexities of our world.”</p>
      <p>“Or the complexities of you,” Anya said.</p>
      <p>Her father finally looked at her. “Forget about him. You’re leaving for New York next week anyway. Priya needs you there. Take the time. Clear your head. When you come back, we’ll discuss other options.”</p>
      <p>“Other options.”</p>
      <p>“Better options.” Maya’s voice was gentle but firm. “Men who can actually provide for you, protect you, match you. Not some struggling journalist playing at business.”</p>
      <p>Anya said nothing. Just stared at her chai, watching the milk swirl.</p>
      <p>“Also,” Maya added, “if he keeps emailing you, sending messages—your father will have someone talk to him. Make things clear. We don’t want this dragging on.”</p>
      <p>“You’re going to threaten him.”</p>
      <p>“We’re going to protect you,” Vikash said. “From making another mistake. Like the cinematographer. Like that French boy. Like every other disaster you’ve brought to our door.”</p>
      <p>He went back to his newspaper. The conversation was over.</p>
      <p>Anya stood and left the dining room, her breakfast untouched.</p>
      <p>In her bedroom, she stared at her phone.</p>
      <p>At Dilip’s message from last night: *Can I call you?*</p>
      <p>At her own response, sent at 1:47 AM after hanging up on him: *I’m not too young. I’m 30.*</p>
      <p>She didn’t know what she’d meant by that. Didn’t know what she wanted.</p>
      <p>Just knew that something in her chest had cracked when she’d heard his voice reading that clumsy, earnest love letter. Something that had been sealed shut for years.</p>
      <p>And now her parents were telling her to forget him. To move to New York. To let them handle it.</p>
      <p><em>Universal truth</em>, she thought bitterly. *Women move on fast. Men pine for years.*</p>
      <p>She knew which one she was supposed to be.</p>
      <p>She just wasn’t sure if she could manage it.</p>
      <p>A week later, she flew to New York.</p>
      <p>-----</p>
      <h2>The Emails Begin</h2>
      <p>Three days after Anya left for New York, Dilip sent an email.</p>
      <p><strong>From:</strong> [dilip.shrivastava@mumbaipulse.in](mailto:dilip.shrivastava@mumbaipulse.in)<br>
      <strong>To:</strong> [anya.chandra.films@gmail.com](mailto:anya.chandra.films@gmail.com)<br>
      **Subject:** Permission Still Granted?<br>
      **Date:** August 15, 2025, 8:23 AM</p>
      <p>Anya,</p>
      <p>I know you said you’re leaving for New York. I know you have a boyfriend there. I know this probably can’t happen the way I hoped it might.</p>
      <p>But you also said I could keep emailing once. Does that permission still stand?</p>
      <p>I’m not trying to change your mind. I’m not trying to be that guy who doesn’t respect boundaries. I just—I liked talking to you. I liked knowing you were reading, even if you weren’t responding.</p>
      <p>If you want me to stop, tell me. I’ll stop.</p>
      <p>But if it’s okay, I’d like to keep writing. Just to send thoughts into the void. Just to have somewhere to put all this feeling.</p>
      <p>Your choice.</p>
      <p>Dilip</p>
      <p>-----</p>
      <p>The response came that evening, sent from a Brooklyn IP address.</p>
      <p><strong>From:</strong> [anya.chandra.films@gmail.com](mailto:anya.chandra.films@gmail.com)<br>
      **To:** [dilip.shrivastava@mumbaipulse.in](mailto:dilip.shrivastava@mumbaipulse.in)<br>
      **Subject:** Re: Permission Still Granted?<br>
      **Date:** August 28, 2025, 7:45 PM (EST)</p>
      <p>Permission granted.</p>
      <p>I can’t promise I’ll respond. The time zones are difficult, and my situation is complicated.</p>
      <p>But yes. You can write.</p>
      <p>A</p>
      <p>-----</p>
      <p>And so he did.</p>
      <p>He wrote about films he was watching late at night. About monsoons flooding Bandra differently than Andheri. About the strange loneliness of being forty and starting over in a new neighborhood.</p>
      <p>He sent them knowing she might not be reading them. Knowing she was probably moving on, probably with that boyfriend she’d mentioned, probably forgetting about the awkward coffee and the late-night confession.</p>
      <p>But he kept writing anyway.</p>
      <p>Because stopping felt like giving up.</p>
      <p>And Dilip wasn’t quite ready to give up yet.</p>
      <p>-----</p>
      <h2>Meanwhile, in Brooklyn</h2>
      <p>Anya read every email.</p>
      <p>Sitting in Priya’s apartment, or on the subway, or late at night when she couldn’t sleep. Read them and felt something crack open in her chest that had been sealed for years.</p>
      <p>Priya noticed.</p>
      <p>“Who are you texting?”</p>
      <p>“No one.”</p>
      <p>“You’re smiling at your phone. That’s not a ‘no one’ smile.” Priya sat beside her on the couch. “Is it that Dilip guy? The one Maa and Papa were talking about?”</p>
      <p>Anya closed her phone. “They want me to forget him.”</p>
      <p>“Do you want to forget him?”</p>
      <p>“I barely know him.”</p>
      <p>“That’s not an answer.”</p>
      <p>Anya was quiet for a long moment. Then: “He writes to me. Emails. About films and his work and his thoughts about Mumbai. He doesn’t expect responses. Just writes anyway.”</p>
      <p>“That’s either very romantic or very stalkerish.”</p>
      <p>“It’s romantic,” Anya said quietly. “He’s—gentle. Lonely in a way I understand. Sees things the way I see them.”</p>
      <p>“So why are you here? Why aren’t you in Mumbai with him?”</p>
      <p>“Because Papa and Maa want me with him only on their terms. Which means it’s not really my choice. Which means even if I went back, even if we tried—it would all be orchestrated. Controlled. Another relationship destroyed before it even started.” She looked at her sister. “How do you trust something when you know it’s been arranged?”</p>
      <p>Priya didn’t have an answer.</p>
      <p>Neither did Anya.</p>
      <p>So she just kept reading his emails. Kept not responding. Kept feeling something build in her chest that felt suspiciously like hope, even though hope was the most dangerous thing a Chandra daughter could carry.</p>
      <p>-----</p>
      <p>Two weeks after Anya arrived in Brooklyn, Maya called.</p>
      <p>“Beta, how are you feeling?”</p>
      <p>“Fine, Maa.”</p>
      <p>“Priya says you seem better. Calmer. The change of scene is good for you.”</p>
      <p>“I’m fine.”</p>
      <p>“Your father and I have been thinking. About your mental health. About what you need right now.” Maya’s voice was careful, measured. “We think you need something to focus on. Someone to care for. Like when people get a puppy and it helps them feel better.”</p>
      <p>“Maa, I’m not getting a puppy.”</p>
      <p>“Not a puppy, beta. A person. A boy—well, he’s only twenty, almost ten years younger than you. Engineering student. He went to Dhirubhai Ambani, very good family—his parents are doctors, his sister too. But he’s struggling right now. Some drug issues. Prescription pills, nothing too serious, but he needs guidance.”</p>
      <p>“You want me to be friends with a twenty-year-old drug addict?”</p>
      <p>“He’s not an addict, beta. Just—lost. His family is worried. They’re elite people, very respectable, but he’s the dumbest one in the family, he knows it, and it’s destroying him. He dropped out of medicine, barely passing engineering, using pills to cope.” Maya paused. “I thought maybe helping him would help you too. Give you purpose. Something to care about that isn’t yourself.”</p>
      <p>“Maa—”</p>
      <p>“Just meet him when you get back. Be his friend. You’re good with people who are struggling. You understand them. Maybe you can help him find his direction.”</p>
      <p>Anya wanted to argue. Wanted to say that she wasn’t a therapist, that fixing broken twenty-year-olds wasn’t her responsibility, that this was just another distraction from the real problem.</p>
      <p>But she was exhausted. Exhausted from fighting. Exhausted from wanting things her parents would never let her have.</p>
      <p>“Fine,” she said. “I’ll meet him.”</p>
      <p>“Good. His name is Rohan. I’ll set it up for when you’re back in Mumbai.”</p>
      <p>After the call ended, Anya sat on Priya’s couch and stared at her phone.</p>
      <p>At Dilip’s latest email, sent that morning: *Watched “In the Mood for Love” last night. That scene where they practice confronting their cheating spouses—playing out conversations they’ll never have. Made me think about all the things we don’t say to each other.*</p>
      <p>She didn’t respond.</p>
    `,
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}
