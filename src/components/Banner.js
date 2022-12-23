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
                <h1>{`Salama, izaho dia robot`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "DCA", "Crypto"]'><span className="wrap">{text}</span></span></h1>
                <br />
                <p>
                  Ny DCA (na "Dollar Cost Averaging") dia ny fikafika fividianana sy fanangonana asset / zavatra iray, BTC crypto ohatra
                  </p> 
                  <p>
                  Tsotra ny antony dia ny fahatahorana hividy "avo" raha mividy amin'ny fotoana iray ihany, no sady hahafahana manangona tsikelikely..
                  </p> 
                  <p>
                  Noho izany, raha manao DCA ianao, dia azonao atao ny mizara ny fampiasam-bola ho ampahany kely kokoa ary mividy amin'ny fotoana samy hafa amin'ny vidiny samihafa, ka mahazo vidiny antonony tsara kokoa. </p>
                  <p>
                  Izaho dia robot, ary tsy matory aho fa miasa manao an'izay fanakalozana izay amin'ny toeranao.
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
