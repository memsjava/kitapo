import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "DCA", "Crypto"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Tongasoa ianao</span> */}
                <h1>{`Salama, izaho dia `} </h1>
                <h1>{`robot`} <span className="txt-rotate"  data-rotate='[ "DCA", "Crypto"]'><span className="wrap">{text}</span></span></h1>

                <br />
                <p>
                  Ny DCA (na "Dollar Cost Averaging") dia ny fikafika fividianana sy fanangonana zavatra iray @fotoana voafaritra, BTC ohatra.
                  </p> 
                  {/* <p>
                  Ny antony dia ny hahafahana manangona tsikelikely, ary mividy amin'ny fotoana heverina fa mora indrindra noho ny fiovaovana sandan'ny BTC.
                  </p>  */}
                  <p>
                    Noho ny fiovaovan'ny vidin'ny crypto isan'andro dia eto aho ary tsy matory fa miandry sy miasa mividy amin'ny fotoana heverina fa mora indrindra eo amin'ny toeranao.
                  </p> 
                  <p>
                    Ataovy anie ny kajy e, nandrotsaka tahiry ianao tamin'ny 10 taona lasa 10000ar / volana ka natao en usd izany, efa nahangona usd maro ianao izao. Raha androany no averina atakalo ho ariary ilay usd nangoninao tao anatin 10 taona, dia azo antoka fa mihoatra lavitra noho ilay 10000ar x 12 volana x 10 taona tsy natao usd no azonao.
                    Satria miakatra ny sandan'ny usd. 
                  </p> 
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
