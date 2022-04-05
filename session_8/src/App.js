import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [height, setHeight] = useState(0)
  const [show, setShow] = useState(false)
  const [countWord, setCountWord] = useState(0)
  const [value, setValue] = useState('')

  useEffect(() => {
    const handleScroll = () =>{
       setShow(window.scrollY > height)
       setHeight(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [height])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const changeInput = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    let numbersOfWord = value
    const count = setTimeout(() => {
      setCountWord(numbersOfWord.split(" ").length - 1)
    }, 500)

    return () => clearTimeout(count)
  }, [value])

  return (
    <div className="App">
      <textarea placeholder="Enter text..." 
        value={value}
        onChange={changeInput}
      />
      <div>Word(s): {countWord}</div>

      <hr />

      {show && (
        <button style={{
            position: 'fixed',
            bottom: 10,
            right: 10
          }} 
          
          onClick={scrollToTop}

        >Back to top</button>
      )}

      <p>
        Corrupti facilis a ratione minima aliquid, quia unde, dignissimos quos consectetur 
        dolorem, accusamus aspernatur nam eaque voluptatibus neque explicabo beatae 
        consequatur eum! Iure animi numquam ullam veniam, hic corporis ex dicta soluta 
        adipisci saepe quia amet nihil? Sequi, cum. Maxime quasi laudantium est doloremque 
        consequatur iure soluta officia! Est architecto, labore nemo, fugiat quis temporibus
      </p>

      <p>    
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sint, earum doloremque, neque tempore ipsam ab impedit temporibus odit vel 
        labore omnis! Alias, quasi nulla cumque dolor voluptate voluptatem. 
        Pariatur, eveniet. Similique quaerat aspernatur dolores quod quam eos voluptatem dicta, iste praesentium sed repellat voluptate 
        animi sunt in voluptatibus tempora, non nulla nostrum culpa deleniti. Unde molestias 
        veritatis dolores in nam, magnam sapiente quis maiores sed assumenda, laboriosam 
        debitis magni reprehenderit nesciunt iste non odio suscipit optio ducimus. 
        Facere recusandae distinctio doloremque, molestiae similique veniam nemo 
        enim impedit, modi vitae repellendus ad fugit ab libero praesentium architecto? 
        Reprehenderit quos ipsam molestias similique aliquam nulla optio quisquam velit animi eveniet sapiente dolor, a 
        enim hic quis?  
      </p>

      <p>
        Similique molestiae illo omnis adipisci eligendi. 
        Ullam modi quia pariatur dolores provident labore excepturi sit totam, 
        voluptas assumenda quae. Perspiciatis libero totam, praesentium incidunt eaque quisquam rerum provident quia laboriosam, 
        nesciunt doloremque ducimus eligendi veniam. Facere, veniam repellendus, 
        doloremque atque possimus voluptates tempora numquam eveniet ipsa expedita neque. 
        Ullam odit, rerum perspiciatis, ut fugit perferendis error alias eligendi debitis 
        deleniti laboriosam aut ad illum amet praesentium delectus mollitia placeat nesciunt,
        cum quod vitae inventore!
      </p>

      <p>Accusamus dolorem sed ab accusantium beatae, fuga, 
        dolore quasi nulla omnis nam provident repellendus aliquam sequi culpa odio 
        amet sunt quia neque laboriosam non modi labore. Porro aperiam voluptates velit? 
        Vero in fugiat reiciendis laborum nobis et doloremque! Quam architecto numquam 
        perferendis debitis nesciunt!
      </p>

      <p>
        Nulla voluptatibus tempore temporibus totam ullam cum placeat modi, 
        corrupti amet reprehenderit deleniti quas eius accusamus minima quasi molestias 
        reiciendis expedita ipsa quam eum! Natus saepe omnis sunt praesentium modi quisquam 
        doloribus magnam ratione. Nobis alias, assumenda earum, magni iusto quidem voluptates
        eligendi vero vitae mollitia, ullam doloribus?
      </p>

      <p>
        Velit, quasi molestiae illum est fugiat accusamus. 
        Modi tempora omnis at fugit, reiciendis, recusandae iste beatae vel voluptas cum, 
        perferendis nam aspernatur rem ab asperiores libero voluptatem quia corporis sunt! 
        Consequuntur ut quidem qui aliquid incidunt natus debitis nisi praesentium 
        placeat cumque, officiis excepturi nulla totam perspiciatis. Architecto error 
        libero, aliquam quasi quibusdam explicabo porro voluptate ex accusantium 
        eligendi laudantium veniam.
      </p>

      <p>
        Dolore neque praesentium tempora, quis eum hic sapiente earum vel? 
        Doloremque cupiditate inventore aliquam dicta nihil soluta, id ab libero harum 
        asperiores architecto beatae minus quod illo pariatur recusandae enim corrupti 
        assumenda molestiae atque sapiente hic nesciunt nostrum eligendi! Atque aspernatur 
        illo voluptatem?
      </p>

      <p>
        Quo dolores dolorum, ipsa tenetur esse ad quod, illum nobis neque id quasi sunt 
        dolore?  Quos eveniet quis, nesciunt quo obcaecati suscipit eum molestias corrupti nihil dicta delectus, sapiente deleniti 
        rerum itaque nostrum sit nisi, magni at eligendi voluptate? Sunt unde optio, amet 
        mollitia aspernatur totam obcaecati adipisci, exercitationem nesciunt, repellendus 
        praesentium accusantium minus placeat ab.
      </p>

      <p>
        Impedit recusandae rerum cupiditate sequi ipsum, harum voluptatum, 
        temporibus totam quisquam aut voluptatibus veniam dicta. Odit sequi alias 
        exercitationem aperiam culpa aut fugit facere temporibus, sapiente molestias 
        architecto officia repudiandae nihil obcaecati autem facilis doloribus incidunt quos.
      </p>

      <p>
        Vel corporis itaque quae deserunt animi, magni molestiae 
        repellat asperiores eveniet culpa atque reprehenderit beatae quibusdam delectus 
        obcaecati fugiat labore? Reprehenderit possimus molestiae consectetur laboriosam 
        maiores perspiciatis asperiores libero! Ex repudiandae odio error suscipit 
        fugit incidunt dolorum animi, nisi accusamus esse maiores voluptates quae tempora
        fugiat dignissimos ipsa molestias possimus, laboriosam soluta eius excepturi dolore. 
        Ipsam laborum natus dolorum mollitia laudantium aliquam, aliquid nostrum maxime 
        similique excepturi, voluptatum odit vero cumque!
      </p>

      <p>
        Voluptas velit veritatis quo doloribus, dignissimos quasi voluptatum rerum explicabo libero dolore dolorem quidem, 
        aut voluptatem saepe debitis officia sint in officiis quae iure tempora ipsam 
        magnam error. Reprehenderit voluptatum modi ex nobis illo sed exercitationem 
        consequatur fuga distinctio placeat, laudantium eos? Fugit accusantium error 
        tempore sint laboriosam ex amet illum natus excepturi vitae nobis velit alias 
        dolorum recusandae explicabo dolor, reiciendis, voluptas fuga?
      </p>

      <p>
        Corrupti facilis a ratione minima aliquid, quia unde, dignissimos quos consectetur 
        dolorem, accusamus aspernatur nam eaque voluptatibus neque explicabo beatae 
        consequatur eum! Iure animi numquam ullam veniam, hic corporis ex dicta soluta 
        adipisci saepe quia amet nihil? Sequi, cum. Maxime quasi laudantium est doloremque 
        consequatur iure soluta officia! Est architecto, labore nemo, fugiat quis temporibus
      </p>

      <p>    
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sint, earum doloremque, neque tempore ipsam ab impedit temporibus odit vel 
        labore omnis! Alias, quasi nulla cumque dolor voluptate voluptatem. 
        Pariatur, eveniet. Similique quaerat aspernatur dolores quod quam eos voluptatem dicta, iste praesentium sed repellat voluptate 
        animi sunt in voluptatibus tempora, non nulla nostrum culpa deleniti. Unde molestias 
        veritatis dolores in nam, magnam sapiente quis maiores sed assumenda, laboriosam 
        debitis magni reprehenderit nesciunt iste non odio suscipit optio ducimus. 
        Facere recusandae distinctio doloremque, molestiae similique veniam nemo 
        enim impedit, modi vitae repellendus ad fugit ab libero praesentium architecto? 
        Reprehenderit quos ipsam molestias similique aliquam nulla optio quisquam velit animi eveniet sapiente dolor, a 
        enim hic quis?  
      </p>

      <p>
        Similique molestiae illo omnis adipisci eligendi. 
        Ullam modi quia pariatur dolores provident labore excepturi sit totam, 
        voluptas assumenda quae. Perspiciatis libero totam, praesentium incidunt eaque quisquam rerum provident quia laboriosam, 
        nesciunt doloremque ducimus eligendi veniam. Facere, veniam repellendus, 
        doloremque atque possimus voluptates tempora numquam eveniet ipsa expedita neque. 
        Ullam odit, rerum perspiciatis, ut fugit perferendis error alias eligendi debitis 
        deleniti laboriosam aut ad illum amet praesentium delectus mollitia placeat nesciunt,
        cum quod vitae inventore!
      </p>

      <p>Accusamus dolorem sed ab accusantium beatae, fuga, 
        dolore quasi nulla omnis nam provident repellendus aliquam sequi culpa odio 
        amet sunt quia neque laboriosam non modi labore. Porro aperiam voluptates velit? 
        Vero in fugiat reiciendis laborum nobis et doloremque! Quam architecto numquam 
        perferendis debitis nesciunt!
      </p>

      <p>
        Corrupti facilis a ratione minima aliquid, quia unde, dignissimos quos consectetur 
        dolorem, accusamus aspernatur nam eaque voluptatibus neque explicabo beatae 
        consequatur eum! Iure animi numquam ullam veniam, hic corporis ex dicta soluta 
        adipisci saepe quia amet nihil? Sequi, cum. Maxime quasi laudantium est doloremque 
        consequatur iure soluta officia! Est architecto, labore nemo, fugiat quis temporibus
      </p>

      <p>    
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sint, earum doloremque, neque tempore ipsam ab impedit temporibus odit vel 
        labore omnis! Alias, quasi nulla cumque dolor voluptate voluptatem. 
        Pariatur, eveniet. Similique quaerat aspernatur dolores quod quam eos voluptatem dicta, iste praesentium sed repellat voluptate 
        animi sunt in voluptatibus tempora, non nulla nostrum culpa deleniti. Unde molestias 
        veritatis dolores in nam, magnam sapiente quis maiores sed assumenda, laboriosam 
        debitis magni reprehenderit nesciunt iste non odio suscipit optio ducimus. 
        Facere recusandae distinctio doloremque, molestiae similique veniam nemo 
        enim impedit, modi vitae repellendus ad fugit ab libero praesentium architecto? 
        Reprehenderit quos ipsam molestias similique aliquam nulla optio quisquam velit animi eveniet sapiente dolor, a 
        enim hic quis?  
      </p>

      <p>
        Similique molestiae illo omnis adipisci eligendi. 
        Ullam modi quia pariatur dolores provident labore excepturi sit totam, 
        voluptas assumenda quae. Perspiciatis libero totam, praesentium incidunt eaque quisquam rerum provident quia laboriosam, 
        nesciunt doloremque ducimus eligendi veniam. Facere, veniam repellendus, 
        doloremque atque possimus voluptates tempora numquam eveniet ipsa expedita neque. 
        Ullam odit, rerum perspiciatis, ut fugit perferendis error alias eligendi debitis 
        deleniti laboriosam aut ad illum amet praesentium delectus mollitia placeat nesciunt,
        cum quod vitae inventore!
      </p>

      <p>Accusamus dolorem sed ab accusantium beatae, fuga, 
        dolore quasi nulla omnis nam provident repellendus aliquam sequi culpa odio 
        amet sunt quia neque laboriosam non modi labore. Porro aperiam voluptates velit? 
        Vero in fugiat reiciendis laborum nobis et doloremque! Quam architecto numquam 
        perferendis debitis nesciunt!
      </p>

      <p>
        Corrupti facilis a ratione minima aliquid, quia unde, dignissimos quos consectetur 
        dolorem, accusamus aspernatur nam eaque voluptatibus neque explicabo beatae 
        consequatur eum! Iure animi numquam ullam veniam, hic corporis ex dicta soluta 
        adipisci saepe quia amet nihil? Sequi, cum. Maxime quasi laudantium est doloremque 
        consequatur iure soluta officia! Est architecto, labore nemo, fugiat quis temporibus
      </p>

      <p>    
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sint, earum doloremque, neque tempore ipsam ab impedit temporibus odit vel 
        labore omnis! Alias, quasi nulla cumque dolor voluptate voluptatem. 
        Pariatur, eveniet. Similique quaerat aspernatur dolores quod quam eos voluptatem dicta, iste praesentium sed repellat voluptate 
        animi sunt in voluptatibus tempora, non nulla nostrum culpa deleniti. Unde molestias 
        veritatis dolores in nam, magnam sapiente quis maiores sed assumenda, laboriosam 
        debitis magni reprehenderit nesciunt iste non odio suscipit optio ducimus. 
        Facere recusandae distinctio doloremque, molestiae similique veniam nemo 
        enim impedit, modi vitae repellendus ad fugit ab libero praesentium architecto? 
        Reprehenderit quos ipsam molestias similique aliquam nulla optio quisquam velit animi eveniet sapiente dolor, a 
        enim hic quis?  
      </p>

      <p>
        Similique molestiae illo omnis adipisci eligendi. 
        Ullam modi quia pariatur dolores provident labore excepturi sit totam, 
        voluptas assumenda quae. Perspiciatis libero totam, praesentium incidunt eaque quisquam rerum provident quia laboriosam, 
        nesciunt doloremque ducimus eligendi veniam. Facere, veniam repellendus, 
        doloremque atque possimus voluptates tempora numquam eveniet ipsa expedita neque. 
        Ullam odit, rerum perspiciatis, ut fugit perferendis error alias eligendi debitis 
        deleniti laboriosam aut ad illum amet praesentium delectus mollitia placeat nesciunt,
        cum quod vitae inventore!
      </p>

      <p>Accusamus dolorem sed ab accusantium beatae, fuga, 
        dolore quasi nulla omnis nam provident repellendus aliquam sequi culpa odio 
        amet sunt quia neque laboriosam non modi labore. Porro aperiam voluptates velit? 
        Vero in fugiat reiciendis laborum nobis et doloremque! Quam architecto numquam 
        perferendis debitis nesciunt!
      </p>

      <p>
        Corrupti facilis a ratione minima aliquid, quia unde, dignissimos quos consectetur 
        dolorem, accusamus aspernatur nam eaque voluptatibus neque explicabo beatae 
        consequatur eum! Iure animi numquam ullam veniam, hic corporis ex dicta soluta 
        adipisci saepe quia amet nihil? Sequi, cum. Maxime quasi laudantium est doloremque 
        consequatur iure soluta officia! Est architecto, labore nemo, fugiat quis temporibus
      </p>

      <p>    
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sint, earum doloremque, neque tempore ipsam ab impedit temporibus odit vel 
        labore omnis! Alias, quasi nulla cumque dolor voluptate voluptatem. 
        Pariatur, eveniet. Similique quaerat aspernatur dolores quod quam eos voluptatem dicta, iste praesentium sed repellat voluptate 
        animi sunt in voluptatibus tempora, non nulla nostrum culpa deleniti. Unde molestias 
        veritatis dolores in nam, magnam sapiente quis maiores sed assumenda, laboriosam 
        debitis magni reprehenderit nesciunt iste non odio suscipit optio ducimus. 
        Facere recusandae distinctio doloremque, molestiae similique veniam nemo 
        enim impedit, modi vitae repellendus ad fugit ab libero praesentium architecto? 
        Reprehenderit quos ipsam molestias similique aliquam nulla optio quisquam velit animi eveniet sapiente dolor, a 
        enim hic quis?  
      </p>

      <p>
        Similique molestiae illo omnis adipisci eligendi. 
        Ullam modi quia pariatur dolores provident labore excepturi sit totam, 
        voluptas assumenda quae. Perspiciatis libero totam, praesentium incidunt eaque quisquam rerum provident quia laboriosam, 
        nesciunt doloremque ducimus eligendi veniam. Facere, veniam repellendus, 
        doloremque atque possimus voluptates tempora numquam eveniet ipsa expedita neque. 
        Ullam odit, rerum perspiciatis, ut fugit perferendis error alias eligendi debitis 
        deleniti laboriosam aut ad illum amet praesentium delectus mollitia placeat nesciunt,
        cum quod vitae inventore!
      </p>

      <p>Accusamus dolorem sed ab accusantium beatae, fuga, 
        dolore quasi nulla omnis nam provident repellendus aliquam sequi culpa odio 
        amet sunt quia neque laboriosam non modi labore. Porro aperiam voluptates velit? 
        Vero in fugiat reiciendis laborum nobis et doloremque! Quam architecto numquam 
        perferendis debitis nesciunt!
      </p>

    </div>
  );
}

export default App;
