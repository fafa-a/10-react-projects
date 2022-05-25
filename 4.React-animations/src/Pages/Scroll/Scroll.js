import { useState } from "react"
import "./Scroll.css"
import { Waypoint } from "react-waypoint"
import { useSpring, animated } from "react-spring"

export default function Scroll() {
  const [toggleTxt, setToggleTxt] = useState(false)
  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
  })
  return (
    <div>
      <p className="scroll-txt">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quis
        facere facilis quae id impedit nobis laudantium. Deserunt laboriosam
        architecto dolorum harum pariatur sequi? Placeat, nam adipisci eaque
        facere nihil, natus totam corrupti excepturi voluptatem soluta a, culpa
        dignissimos rerum commodi neque pariatur libero consequatur esse!
        Accusantium veritatis quia labore, illum possimus quae facere dolorem
        deserunt officia itaque non quibusdam molestiae expedita doloremque
        exercitationem tempore distinctio earum sequi! Sint facilis tempore
        dignissimos, totam natus, ad veritatis exercitationem accusamus earum
        cupiditate quidem, sed quisquam aspernatur iste odio aut officiis quia
        debitis. Cumque ex accusantium magnam consectetur doloribus debitis
        similique fugiat tempora ut ipsam consequuntur sunt quidem id
        laudantium, ipsa, voluptatibus modi ratione voluptatum. Iusto
        repudiandae quasi vitae culpa soluta maxime, delectus iste voluptatem
        ipsum eos officiis voluptas perferendis, itaque eaque esse repellendus
        deserunt? Suscipit reprehenderit accusantium magnam, cum dolorem ipsum
        saepe laudantium minima. Suscipit, officia facere. Voluptatibus quis
        eaque officia facilis repellendus necessitatibus sit iusto culpa saepe
        harum aperiam nesciunt pariatur quas asperiores, laudantium tempora
        rerum, quia voluptatum cum? Error accusantium incidunt cumque libero,
        nam natus ad ea id obcaecati modi rem a molestiae soluta! Dolor
        blanditiis voluptatum voluptatem suscipit esse! Sit cupiditate nostrum
        vitae expedita officiis ab deserunt cumque natus.
      </p>
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!toggleTxt) {
            setToggleTxt(true)
          }
        }}
      />
      <animated.div style={animation} className="cta-section">
        <h2>N'en ratez pas une miette !</h2>
        <form>
          <label htmlFor="email">inscrivez-vous à la newletter</label>
          <input type="email" id="email" />
        </form>
      </animated.div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni,
        maiores ab ullam exercitationem, necessitatibus cum omnis magnam ad
        vitae totam corporis. Exercitationem vitae delectus deserunt fugiat
        officiis sunt? Architecto quos tempora ullam voluptas quisquam, rerum
        deleniti eveniet illum ipsa vero consectetur, ex doloremque mollitia
        asperiores iste odio cupiditate quidem laudantium at recusandae rem
        ipsum. Dolorum, cum voluptas ipsa, maiores magni ullam harum
        reprehenderit modi nesciunt, mollitia aliquam debitis? Quos, ipsum
        tempora deserunt ex ut, ad vitae in maxime aperiam fuga reprehenderit
        cupiditate repellendus fugit vero quibusdam dicta iste maiores quae
        beatae esse quas voluptate natus! Iusto quia repellat nihil eveniet qui
        modi eos omnis explicabo obcaecati aperiam ipsa quibusdam iste porro
        recusandae, officiis sapiente, aut unde! Odio sequi voluptatem beatae,
        nam tempore maxime nesciunt reiciendis harum libero tempora laborum
        officiis, amet fugiat ab nulla. Illum nam aspernatur unde animi
        distinctio eum velit qui, sunt obcaecati mollitia eveniet odit ut, minus
        magnam repellendus architecto accusantium, similique quae alias? Dolor
        sed iure aliquid repellendus nulla officia commodi delectus nostrum
        dolorum eius aliquam ab quia numquam, itaque, in maiores. Quisquam
        possimus magni reprehenderit officiis ratione ut blanditiis omnis nisi
        quasi unde modi porro labore, fugit consequatur! Cumque aspernatur
        asperiores illum et? Soluta.
      </p>
    </div>
  )
}
