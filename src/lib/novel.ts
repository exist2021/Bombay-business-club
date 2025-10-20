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
  ...Array.from({ length: 7 }, (_, i) => ({
    id: i + 2,
    title: `Chapter ${i + 2}: The Invitation`,
    slug: `chapter-${i + 2}`,
    content: `
      <p>This is the beginning of chapter ${i + 2}. The story unfolds as our characters navigate the intricate web of power and ambition in the heart of Bombay.</p>
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
