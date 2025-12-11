export default function WhatIsAComputer() {
  return (
    <div className='text-base sm:text-lg leading-relaxed text-neutral-200 space-y-6 bg-black/60 p-6 sm:rounded-2xl'>
      <p>
        When the first machines capable of performing only calculations were
        invented, they became known as computers, because the word computer
        originally meant “that which computes.” Over time, thanks to extensive
        research and development by engineers and computer scientists, these
        machines evolved to process any type of data, as long as it could be
        represented as binary electrical signals (0 and 1). With this evolution,
        the word “computer” has broadened in meaning, since these machines now
        do much more than calculate — they process all kinds of data. In that
        sense, a more fitting name might be “data processor.”
      </p>

      <p>
        Although a computer may appear to manipulate words, images, sounds, or
        even entire virtual worlds, at the deepest level it processes only one
        thing: binary information. Everything that enters or leaves a computer —
        from a simple key press to a high-definition video — is ultimately
        translated into long sequences of zeros and ones. These binary digits,
        or bits, are the fundamental language of the machine.
      </p>
      <p>
        From this minimal alphabet, computers are capable of representing many
        different kinds of data. Numbers, for example, may appear in human
        languages as integers, decimals, or scientific notation, but inside the
        machine they are stored as fixed patterns of bits, interpreted by the
        processor’s arithmetic logic unit. Text is equally numerical: every
        character, from the letter “A” to a symbol like “%”, corresponds to a
        code defined by standards such as ASCII or Unicode. Images follow the
        same principle. A picture is nothing more than a grid of pixels, each
        pixel represented by numerical values describing color and brightness.
        Audio is processed as thousands of numerical samples per second,
        describing how a sound wave varies over time. Videos combine both:
        sequences of frames plus a soundtrack, all encoded as numbers.
      </p>
      <p>
        What appears diverse to humans becomes uniform to the machine. Whether
        it is performing a mathematical calculation, analyzing a photograph, or
        transmitting a message across the internet, the computer deals with
        everything as structured numerical data. Higher-level abstractions —
        strings, lists, objects, or entire files — are conveniences created for
        us. Internally, the computer only manipulates electrical states that
        correspond to bits, arranging and transforming them according to precise
        logical rules.
      </p>
      <p>
        Understanding this principle is essential because it reveals both the
        power and the simplicity of computation. A computer is not intelligent
        by itself; it is a system capable of recognizing patterns of bits,
        applying operations to them, and producing new patterns in response.
        Yet, from this simple foundation, emerges the extraordinary versatility
        that defines modern technology: digital art, social networks, artificial
        intelligence, scientific simulations, and almost everything we
        experience through a screen.
      </p>

      <p>Types of data that a computer can process:</p>
      <ul className='list-disc list-inside space-y-2'>
        <li>
          Numerical data
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>
              Integers
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>-3, -2, -1, 0, 1, 2, 3</li>
                <li>Used for counting, array indices, records, addresses.</li>
              </ul>
            </li>
            <li>
              Floating-point numbers
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>3.14, -0.001, 2.71828</li>
                <li>
                  They represent values ​​with decimal places, physical
                  measurements, and scientific calculations.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          Logical/Boolean Data
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>
              They represent only two possibilities:
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>True / False or 1 / 0</li>
                <li>
                  Used in conditions, decisions, comparisons, and control logic.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Textual Data (characters and strings)
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>
              Individual characters (char)
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>Represented via tables such as ASCII or Unicode.</li>
              </ul>
            </li>
            <li>
              Character sequences (strings)
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>
                  Full text: words, phrases and documents. Note: text is
                  converted into numbers (character codes), and only then does
                  it become bits.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Image Data
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>
              Includes photos, drawings, pixels, colors, transparency. The
              computer processes images converted into:
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>A matrix of pixels</li>
                <li>
                  Each pixel represented by numerical values ​​(RGB, RGBA, etc.)
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Audio Data
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>
              Sound is converted into:
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>
                  Numerical samples (e.g., 44100 per second), each sample
                  representing the intensity of the sound.{" "}
                </li>
                <li>
                  These are analog signals transformed into digital values.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Video Data
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>
              A video is nothing more than:
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>Image sequences (frames)</li>
                <li>Synchronized audio</li>
                <li>
                  Metadata
                  <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                    <li>
                      It is information that describes, defines, or provides
                      context to other data, allowing systems, databases, APIs,
                      and applications to understand, organize, and manipulate
                      that data efficiently.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Structured / Complex Data
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>
              These are compositions of the basic types:
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>Lists</li>
                <li>Arrays</li>
                <li>Objects</li>
                <li>Records</li>
                <li>JSON and XML files</li>
                <li>Databases</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Network Data / Communication
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>
              Packages containing:
              <ul className='list-[square] list-inside ml-6 space-y-1 text-sm'>
                <li>Headers</li>
                <li>Addresses</li>
                <li>Content</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <p>
        In short: everything becomes bits. Data types are infinitely diverse,
        but they are all represented by binary numbers.
      </p>
      <ul className='list-disc list-inside space-y-2'>
        <li>
          The hardware only handles:
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>additions</li>
            <li>subtractions</li>
            <li>comparisons</li>
            <li>logical operations</li>
          </ul>
        </li>
        <li>
          And the software creates layers of abstraction that transform bits
          into:
          <ul className='list-[circle] list-inside ml-6 space-y-1'>
            <li>Text</li>
            <li>Image</li>
            <li>Video</li>
            <li>Audio</li>
            <li>Complex structures</li>
            <li>Artificial intelligence</li>
          </ul>
        </li>
      </ul>

      <p>A Brief History of Computing</p>
      <p>
        The history of computing is the history of humanity’s attempt to extend
        its own intellectual abilities. Long before the invention of modern
        machines, people created tools to aid calculation: the abacus, used for
        thousands of years, allowed faster arithmetic; centuries later,
        mechanical devices such as Pascal’s calculator and Leibniz’s stepped
        reckoner automated addition, subtraction, multiplication, and division.
        These early machines were limited, but they revealed an important idea:
        that mechanical processes could imitate mental ones.
      </p>
      <p>
        A major conceptual leap occurred in the 19th century with Charles
        Babbage’s designs for the Analytical Engine. Although never completed,
        it introduced the foundations of modern computing: a memory to store
        numbers, a processor to manipulate them, and a system of punched cards
        to supply instructions. The Analytical Engine was not merely a
        calculator — it was a programmable machine. Ada Lovelace, who wrote
        detailed notes about the device, is often considered the first computer
        programmer, recognizing that such a machine could operate not only on
        numbers but on any symbol representable in a formal system.
      </p>
      <p>
        The 20th century transformed these theoretical ideas into practical
        technology. During World War II, machines such as the British Colossus
        and the American ENIAC marked the arrival of electronic computing. They
        replaced gears and levers with vacuum tubes, enabling calculations
        thousands of times faster than their mechanical predecessors. Still
        enormous and fragile, these early computers were specialized instruments
        built for military or scientific purposes.
      </p>
      <p>
        The invention of the transistor in 1947, followed by the integrated
        circuit in 1958, changed everything. Computers became smaller, faster,
        cheaper, and far more reliable. What once filled entire rooms could now
        fit on desks, and eventually in pockets. By the 1970s and 1980s,
        personal computers began to appear in homes and schools, making digital
        technology accessible to ordinary people for the first time.
      </p>
      <p>
        The final decades of the century and the beginning of the next brought
        two revolutions: the rise of the internet and the emergence of powerful
        mobile devices. Information that was once isolated on individual
        machines flowed freely across global networks. Smartphones placed
        computing and communication tools into billions of hands, reshaping
        everyday life. Computing is no longer a specialized activity — it has
        become an invisible infrastructure that supports modern society.
      </p>
      <p>
        From ancient counting tools to quantum processors, the history of
        computing shows a steady movement toward abstraction, automation, and
        universality. Each generation of machines expands what is possible, not
        by replacing human thought, but by extending it.
      </p>

      <p>Why Binary?</p>
      <p>
        At first glance, it may seem arbitrary that computers rely on binary — a
        system built from only two symbols, 0 and 1. After all, humans are
        accustomed to richer alphabets: the ten digits of the decimal system,
        the letters of written language, and countless symbols used in
        mathematics and art. Yet binary is not a limitation; it is a fundamental
        strength of digital technology. Computers use binary not because it is
        simple for us, but because it is ideal for machines.
      </p>
      <p>
        The physical world inside a computer is governed by electricity.
        Electronic circuits must distinguish between different states to
        represent information, and the most reliable way to do this is by
        recognizing only two: a high voltage or a low voltage, a closed circuit
        or an open one. With just two clearly separated states, the chances of
        misinterpretation caused by noise, heat, or interference are drastically
        reduced. In this environment, binary emerges as the safest and most
        stable foundation for storing and manipulating information.
      </p>
      <p>
        But binary is more than an engineering convenience. It is deeply
        connected to the logic of computation itself. Every operation performed
        by a computer — every comparison, every decision, every arithmetic step
        — can be expressed using Boolean logic, a mathematical system built on
        true and false values. Binary digits map perfectly onto this logic,
        allowing circuits to be designed as physical embodiments of mathematical
        rules. Complex programs, no matter how sophisticated, are ultimately
        vast combinations of simple logical operations.
      </p>
      <p>
        Binary also enables universality. With only two symbols, any kind of
        data can be encoded: numbers, letters, colors, sound waves, and even
        entire virtual worlds. What seems diverse to us becomes uniform to a
        machine, because binary serves as a common language that bridges the gap
        between abstract ideas and physical signals. Once information is
        represented in bits, it can be transformed, stored, transmitted, and
        combined in endlessly flexible ways.
      </p>
      <p>
        In essence, computers use binary because it aligns perfectly with both
        the physics of electronics and the mathematics of logic. It is the
        simplest possible foundation that can support the vast complexity of
        modern computation. From a pair of symbols — 0 and 1 — emerges the
        entire digital universe.
      </p>
    </div>
  );
}
