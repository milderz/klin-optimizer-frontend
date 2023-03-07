import styled from "styled-components";

export const StyledHero = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50rem;
  gap: 4.4rem;
  /* position: relative; */

  .hero-title {
    line-height: 76px;
    text-align: center;
    z-index: 2;

    font-size: var(--text-xlg);
    font-size: 72px;
    background: -webkit-linear-gradient(var(--blue), var(--green));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
      width: 11ch;
      line-height: 52px;
      font-size: var(--text-mlg);
    }

    @media screen and (max-width: 350px) {
      width: 11ch;
      line-height: 42px;
      font-size: var(--text-lg);
    }
  }

  .hero-text {
    width: 60ch;
    text-align: center;
    font-size: var(--text-md);
    z-index: 2;

    @media screen and (max-width: 768px) {
      width: 45ch;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 60.9rem;
    width: 100%;
    background: #575a5d00;

    overflow: hidden;
  }

  span {
    z-index: 1;
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 40;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  span:nth-child(0) {
    color: #2de907;
    top: 51%;
    left: 85%;
    animation-duration: 10s;
    animation-delay: -61s;
    transform-origin: -6vw -9vh;
    box-shadow: 2vmin 0 0.9008632551699696vmin currentColor;
  }
  span:nth-child(1) {
    color: #08d5e2;
    top: 84%;
    left: 10%;
    animation-duration: 91s;
    animation-delay: -93s;
    transform-origin: 13vw 0vh;
    box-shadow: -2vmin 0 1.1581368645643575vmin currentColor;
  }
  span:nth-child(2) {
    color: #08d5e2;
    top: 73%;
    left: 15%;
    animation-duration: 13s;
    animation-delay: -28s;
    transform-origin: 5vw -10vh;
    box-shadow: -2vmin 0 1.0771696624848592vmin currentColor;
  }
  span:nth-child(3) {
    color: #2de907;
    top: 46%;
    left: 15%;
    animation-duration: 67s;
    animation-delay: -98s;
    transform-origin: -2vw -20vh;
    box-shadow: -2vmin 0 1.0102778238081263vmin currentColor;
  }
  span:nth-child(4) {
    color: #2de907;
    top: 95%;
    left: 20%;
    animation-duration: 78s;
    animation-delay: -47s;
    transform-origin: 4vw -15vh;
    box-shadow: -2vmin 0 1.0554311761136215vmin currentColor;
  }
  span:nth-child(5) {
    color: #2de907;
    top: 61%;
    left: 44%;
    animation-duration: 23s;
    animation-delay: -1s;
    transform-origin: 6vw -4vh;
    box-shadow: -2vmin 0 0.9747661661959732vmin currentColor;
  }
  span:nth-child(6) {
    color: #08d5e2;
    top: 34%;
    left: 38%;
    animation-duration: 18s;
    animation-delay: -44s;
    transform-origin: 12vw -19vh;
    box-shadow: -2vmin 0 0.6204605086979078vmin currentColor;
  }
  span:nth-child(7) {
    color: #08d5e2;
    top: 72%;
    left: 14%;
    animation-duration: 45s;
    animation-delay: -68s;
    transform-origin: -20vw 23vh;
    box-shadow: -2vmin 0 1.2379131449161738vmin currentColor;
  }
  span:nth-child(8) {
    color: #2de907;
    top: 71%;
    left: 29%;
    animation-duration: 30s;
    animation-delay: -15s;
    transform-origin: 10vw -6vh;
    box-shadow: 2vmin 0 0.5422644192335071vmin currentColor;
  }
  span:nth-child(9) {
    color: #34c78a;
    top: 10%;
    left: 23%;
    animation-duration: 63s;
    animation-delay: -72s;
    transform-origin: -17vw 15vh;
    box-shadow: -2vmin 0 0.3504558749806239vmin currentColor;
  }
  span:nth-child(10) {
    color: #2de907;
    top: 36%;
    left: 83%;
    animation-duration: 9s;
    animation-delay: -8s;
    transform-origin: 19vw 3vh;
    box-shadow: 2vmin 0 0.8355010484334568vmin currentColor;
  }
  span:nth-child(11) {
    color: #08d5e2;
    top: 41%;
    left: 40%;
    animation-duration: 72s;
    animation-delay: -48s;
    transform-origin: 12vw 6vh;
    box-shadow: 2vmin 0 1.046358932884028vmin currentColor;
  }
  span:nth-child(12) {
    color: #34c78a;
    top: 71%;
    left: 96%;
    animation-duration: 28s;
    animation-delay: -46s;
    transform-origin: 6vw 24vh;
    box-shadow: -2vmin 0 0.8736091791306455vmin currentColor;
  }
  span:nth-child(13) {
    color: #34c78a;
    top: 93%;
    left: 88%;
    animation-duration: 13s;
    animation-delay: -55s;
    transform-origin: -4vw -24vh;
    box-shadow: -2vmin 0 1.174001995024816vmin currentColor;
  }
  span:nth-child(14) {
    color: #08d5e2;
    top: 77%;
    left: 14%;
    animation-duration: 64s;
    animation-delay: -13s;
    transform-origin: 21vw 12vh;
    box-shadow: -2vmin 0 0.6105824714103025vmin currentColor;
  }
  span:nth-child(15) {
    color: #08d5e2;
    top: 54%;
    left: 17%;
    animation-duration: 93s;
    animation-delay: -62s;
    transform-origin: 7vw 17vh;
    box-shadow: 2vmin 0 1.2138635537205023vmin currentColor;
  }
  span:nth-child(16) {
    color: #34c78a;
    top: 69%;
    left: 53%;
    animation-duration: 96s;
    animation-delay: -64s;
    transform-origin: -3vw -12vh;
    box-shadow: 2vmin 0 0.731884379443406vmin currentColor;
  }
  span:nth-child(17) {
    color: #2de907;
    top: 64%;
    left: 7%;
    animation-duration: 45s;
    animation-delay: -1s;
    transform-origin: -1vw 23vh;
    box-shadow: -2vmin 0 1.0611603622245744vmin currentColor;
  }
  span:nth-child(18) {
    color: #2de907;
    top: 62%;
    left: 23%;
    animation-duration: 93s;
    animation-delay: -99s;
    transform-origin: -21vw 19vh;
    box-shadow: -2vmin 0 0.36997721520833093vmin currentColor;
  }
  span:nth-child(19) {
    color: #2de907;
    top: 31%;
    left: 47%;
    animation-duration: 21s;
    animation-delay: -100s;
    transform-origin: -19vw 22vh;
    box-shadow: -2vmin 0 0.5459003148849524vmin currentColor;
  }
  span:nth-child(20) {
    color: #2de907;
    top: 63%;
    left: 46%;
    animation-duration: 51s;
    animation-delay: -34s;
    transform-origin: 21vw -22vh;
    box-shadow: 2vmin 0 0.7159232629877319vmin currentColor;
  }
  span:nth-child(21) {
    color: #2de907;
    top: 3%;
    left: 49%;
    animation-duration: 26s;
    animation-delay: -69s;
    transform-origin: 21vw 0vh;
    box-shadow: -2vmin 0 0.6409823838379123vmin currentColor;
  }
  span:nth-child(22) {
    color: #2de907;
    top: 89%;
    left: 12%;
    animation-duration: 76s;
    animation-delay: -55s;
    transform-origin: -7vw 7vh;
    box-shadow: 2vmin 0 1.0835168443179084vmin currentColor;
  }
  span:nth-child(23) {
    color: #2de907;
    top: 87%;
    left: 58%;
    animation-duration: 45s;
    animation-delay: -20s;
    transform-origin: -14vw 8vh;
    box-shadow: 2vmin 0 0.9337278888552458vmin currentColor;
  }
  span:nth-child(24) {
    color: #2de907;
    top: 7%;
    left: 2%;
    animation-duration: 46s;
    animation-delay: -75s;
    transform-origin: 22vw 17vh;
    box-shadow: -2vmin 0 0.9960297946444663vmin currentColor;
  }
  span:nth-child(25) {
    color: #2de907;
    top: 48%;
    left: 88%;
    animation-duration: 80s;
    animation-delay: -23s;
    transform-origin: -4vw -2vh;
    box-shadow: -2vmin 0 1.22797082408696vmin currentColor;
  }
  span:nth-child(26) {
    color: #2de907;
    top: 20%;
    left: 63%;
    animation-duration: 8s;
    animation-delay: -27s;
    transform-origin: 20vw 17vh;
    box-shadow: -2vmin 0 0.7593084226009053vmin currentColor;
  }
  span:nth-child(27) {
    color: #08d5e2;
    top: 43%;
    left: 37%;
    animation-duration: 68s;
    animation-delay: -24s;
    transform-origin: 19vw -10vh;
    box-shadow: 2vmin 0 1.2421813513468327vmin currentColor;
  }
  span:nth-child(28) {
    color: #34c78a;
    top: 15%;
    left: 91%;
    animation-duration: 44s;
    animation-delay: -51s;
    transform-origin: -18vw -12vh;
    box-shadow: -2vmin 0 0.26033796293020073vmin currentColor;
  }
  span:nth-child(29) {
    color: #34c78a;
    top: 95%;
    left: 49%;
    animation-duration: 35s;
    animation-delay: -72s;
    transform-origin: 0vw 14vh;
    box-shadow: 2vmin 0 0.8435224503991865vmin currentColor;
  }
  span:nth-child(30) {
    color: #08d5e2;
    top: 91%;
    left: 77%;
    animation-duration: 68s;
    animation-delay: -99s;
    transform-origin: 9vw 9vh;
    box-shadow: -2vmin 0 0.25536191507624006vmin currentColor;
  }
  span:nth-child(31) {
    color: #2de907;
    top: 61%;
    left: 52%;
    animation-duration: 101s;
    animation-delay: -90s;
    transform-origin: 17vw -4vh;
    box-shadow: -2vmin 0 0.3631543729139881vmin currentColor;
  }
  span:nth-child(32) {
    color: #34c78a;
    top: 23%;
    left: 65%;
    animation-duration: 33s;
    animation-delay: -31s;
    transform-origin: 1vw -2vh;
    box-shadow: 2vmin 0 0.9547863331462321vmin currentColor;
  }
  span:nth-child(33) {
    color: #2de907;
    top: 85%;
    left: 28%;
    animation-duration: 59s;
    animation-delay: -51s;
    transform-origin: -14vw -9vh;
    box-shadow: -2vmin 0 0.47254565453943354vmin currentColor;
  }
  span:nth-child(34) {
    color: #08d5e2;
    top: 17%;
    left: 81%;
    animation-duration: 15s;
    animation-delay: -44s;
    transform-origin: -7vw 23vh;
    box-shadow: -2vmin 0 0.8449117178733354vmin currentColor;
  }
  span:nth-child(35) {
    color: #34c78a;
    top: 48%;
    left: 81%;
    animation-duration: 83s;
    animation-delay: -20s;
    transform-origin: 7vw 14vh;
    box-shadow: -2vmin 0 1.1379395388903573vmin currentColor;
  }
  span:nth-child(36) {
    color: #34c78a;
    top: 73%;
    left: 26%;
    animation-duration: 40s;
    animation-delay: -78s;
    transform-origin: -20vw 1vh;
    box-shadow: 2vmin 0 0.362053253765402vmin currentColor;
  }
  span:nth-child(37) {
    color: #08d5e2;
    top: 53%;
    left: 56%;
    animation-duration: 98s;
    animation-delay: -31s;
    transform-origin: 5vw 8vh;
    box-shadow: 2vmin 0 0.2546701665413409vmin currentColor;
  }
  span:nth-child(38) {
    color: #34c78a;
    top: 16%;
    left: 24%;
    animation-duration: 55s;
    animation-delay: -35s;
    transform-origin: 24vw 20vh;
    box-shadow: 2vmin 0 0.5998472288845484vmin currentColor;
  }
  span:nth-child(39) {
    color: #2de907;
    top: 73%;
    left: 61%;
    animation-duration: 10s;
    animation-delay: -10s;
    transform-origin: 0vw 25vh;
    box-shadow: 2vmin 0 1.1400471182689869vmin currentColor;
  }
  span:nth-child(40) {
    color: #34c78a;
    top: 41%;
    left: 26%;
    animation-duration: 99s;
    animation-delay: -39s;
    transform-origin: 24vw -19vh;
    box-shadow: 2vmin 0 0.9278213133398969vmin currentColor;
  }
  span:nth-child(41) {
    color: #08d5e2;
    top: 43%;
    left: 30%;
    animation-duration: 19s;
    animation-delay: -97s;
    transform-origin: -23vw 17vh;
    box-shadow: 2vmin 0 0.8678914647793776vmin currentColor;
  }
  span:nth-child(42) {
    color: #34c78a;
    top: 33%;
    left: 51%;
    animation-duration: 26s;
    animation-delay: -64s;
    transform-origin: -23vw -20vh;
    box-shadow: 2vmin 0 1.0305238783667137vmin currentColor;
  }
  span:nth-child(43) {
    color: #08d5e2;
    top: 43%;
    left: 35%;
    animation-duration: 55s;
    animation-delay: -41s;
    transform-origin: 4vw -24vh;
    box-shadow: 2vmin 0 1.1521736360965575vmin currentColor;
  }
  span:nth-child(44) {
    color: #2de907;
    top: 50%;
    left: 29%;
    animation-duration: 69s;
    animation-delay: -69s;
    transform-origin: 9vw -11vh;
    box-shadow: -2vmin 0 0.8576238687591757vmin currentColor;
  }
  span:nth-child(45) {
    color: #2de907;
    top: 46%;
    left: 72%;
    animation-duration: 102s;
    animation-delay: -20s;
    transform-origin: -12vw 24vh;
    box-shadow: 2vmin 0 0.6071135911941816vmin currentColor;
  }
  span:nth-child(46) {
    color: #2de907;
    top: 54%;
    left: 51%;
    animation-duration: 85s;
    animation-delay: -52s;
    transform-origin: -11vw -9vh;
    box-shadow: -2vmin 0 1.1967272722550455vmin currentColor;
  }
  span:nth-child(47) {
    color: #34c78a;
    top: 8%;
    left: 50%;
    animation-duration: 52s;
    animation-delay: -49s;
    transform-origin: 20vw 4vh;
    box-shadow: 2vmin 0 1.160864665572356vmin currentColor;
  }
  span:nth-child(48) {
    color: #08d5e2;
    top: 18%;
    left: 80%;
    animation-duration: 34s;
    animation-delay: -24s;
    transform-origin: 5vw 0vh;
    box-shadow: 2vmin 0 1.0134452767956048vmin currentColor;
  }
  span:nth-child(49) {
    color: #34c78a;
    top: 44%;
    left: 24%;
    animation-duration: 27s;
    animation-delay: -18s;
    transform-origin: -5vw -1vh;
    box-shadow: 2vmin 0 0.6970198660542708vmin currentColor;
  }
`;
