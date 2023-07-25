//youtube clone
import { useEffect, useRef, useState } from "react";
import "./youtube.css";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3424201bdfmshb8f2ea7923a3ddap1bff7cjsn84f4c9b23ca1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

function Header() {
  const navigate = useNavigate();

  const search = (value) => {
    navigate(`/search/${value}`);
  };
  const inputHeader = useRef();

  //aqui si presiona tecla enter va a  redirigir a la busqueda
  const boton = (e) => {
    if (e.keyCode == 13) {
      const lupa = document.querySelector(".lupa");
      lupa.click();
    }
  };
  return (
    <div className="header">
      <div>youtube</div>
      <div className="search">
        <input
          type="text"
          className="input"
          ref={inputHeader}
          placeholder="Buscar"
          onKeyDown={boton}
        />
        <div
          className="lupa"
          onClick={() => search(inputHeader.current.value)}
        >
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="SearchIcon"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            >
            </path>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [busqueda, setBusqueda] = useState("noticias");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [dataChannel, setDataChannel] = useState();
  const objeto = [
    {
      svg: (
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="HomeIcon"
          fill="inherit"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        </svg>
      ),
      nombre: "noticias",
    },
    {
      svg: (
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CodeIcon"
        >
          <path
            d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
          >
          </path>
        </svg>
      ),
      nombre: "react js",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CodeIcon"
        >
          <path
            d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
          >
          </path>
        </svg>
      ),
      nombre: "Next js",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MusicNoteIcon"
        >
          <path
            d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
          >
          </path>
        </svg>
      ),
      nombre: "musica",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SchoolIcon"
        >
          <path
            d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"
          >
          </path>
        </svg>
      ),
      nombre: "educacion",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="GraphicEqIcon"
        >
          <path
            d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"
          >
          </path>
        </svg>
      ),
      nombre: "podcast",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="OndemandVideoIcon"
        >
          <path
            d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6-7 4V7z"
          >
          </path>
        </svg>
      ),
      nombre: "peliculas",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SportsEsportsIcon"
        >
          <path
            d="m21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
          >
          </path>
        </svg>
      ),
      nombre: "videojuegos",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="LiveTvIcon"
        >
          <path
            d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"
          >
          </path>
        </svg>
      ),
      nombre: "live",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FitnessCenterIcon"
        >
          <path
            d="M20.57 14.86 22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"
          >
          </path>
        </svg>
      ),
      nombre: "Deportes",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CheckroomIcon"
        >
          <path
            d="M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z"
          >
          </path>
        </svg>
      ),
      nombre: "moda",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FaceRetouchingNaturalIcon"
        >
          <circle cx="9" cy="13" r="1.25"></circle>
          <path
            d="m20.77 8.58-.92 2.01c.09.46.15.93.15 1.41 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-.05.01-.1 0-.14 2.6-.98 4.69-2.99 5.74-5.55C11.58 8.56 14.37 10 17.5 10c.45 0 .89-.04 1.33-.1l-.6-1.32-.88-1.93-1.93-.88-2.79-1.27 2.79-1.27.71-.32C14.87 2.33 13.47 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.47-.33-2.87-.9-4.13l-.33.71z"
          >
          </path>
          <circle cx="15" cy="13" r="1.25"></circle>
          <path
            d="M20.6 5.6 19.5 8l-1.1-2.4L16 4.5l2.4-1.1L19.5 1l1.1 2.4L23 4.5z"
          >
          </path>
        </svg>
      ),
      nombre: "belleza",
    },
    {
      svg: (
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="TheaterComedyIcon"
        >
          <path
            d="M2 16.5C2 19.54 4.46 22 7.5 22s5.5-2.46 5.5-5.5V10H2v6.5zm5.5 2C6.12 18.5 5 17.83 5 17h5c0 .83-1.12 1.5-2.5 1.5zM10 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-5 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
          >
          </path>
          <path
            d="M11 3v6h3v2.5c0-.83 1.12-1.5 2.5-1.5s2.5.67 2.5 1.5h-5v2.89c.75.38 1.6.61 2.5.61 3.04 0 5.5-2.46 5.5-5.5V3H11zm3 5.08c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1c0 .56-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1c0 .56-.45 1-1 1z"
          >
          </path>
        </svg>
      ),
      nombre: "comedia",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FitnessCenterIcon"
        >
          <path
            d="M20.57 14.86 22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"
          >
          </path>
        </svg>
      ),
      nombre: "gimnasio",
    },
    {
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="DeveloperModeIcon"
        >
          <path
            d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"
          >
          </path>
        </svg>
      ),
      nombre: "criptomonedas",
    },
  ];
  const selected = (id, nombre) => {
    const nav = document.querySelector(".nav");
    for (let i = 0; i < nav.children.length; i++) {
      nav.children[i].style.background = "red";
    }
    const x = document.querySelector(`#select-${id}`);
    x.style.background = "black";
    x.style.color = "white";
    x.style.fill = "white";

    setBusqueda(nombre);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${busqueda}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
      options,
    )
      .then((e) => e.json())
      .then((e) => {
        setData(e.items);
        console.log(e);
        // console.log(e.items[0].snippet.channelId);
        console.log("hola");

        setLoading(false);
      });
  }, [busqueda]);

  return (
    <div className="ventana">
      <Header></Header>
      <div className="container">
        <div className="nav">
          {objeto.map((res, ind) => {
            return (
              <div
                key={ind}
                onClick={() => selected(ind, res.nombre)}
                id={`select-${ind}`}
                className="items nav-noticias"
              >
                <span className="icono">
                  {res.svg}
                </span>
                <span className="name">{res.nombre}</span>
              </div>
            );
          })}
        </div>
        <div className="videos-caja">
          <div className="titulo">
            <span className="tituloName">videos de</span>
            <span className="tituloBusqueda">{busqueda}</span>
          </div>
          <div className="videos">
            {loading
              ? (
                <div class="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
              )
              : data.map((resu, ind) => {
                {
                  /*fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${resu.snippet.channelId}`,options)
                .then(e=>e.json())
                .then(e=>{
                  setDataChannel(e)
                  console.log("-------------")
                  console.log(e)
                })*/
                }
                return (
                  <div className="items" key={ind}>
                    <div className="container-img">
                      <img
                        className="imagen"
                        src={resu.snippet.thumbnails.high.url}
                        alt=""
                      />
                    </div>
                    <div className="title">
                      {resu.snippet.title}
                    </div>
                    <div className="channelTitle">
                      {resu.snippet.channelTitle}
                    </div>
                  </div>
                );
                /*return (
                  <div key={ind}>
                    <iframe
                      width="250"
                      height="150"
                      src={`https://www.youtube.com/embed/${resu.id.videoId}`}
                      frameborder="0"
                    >
                    </iframe>
                  </div>
                );*/
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Videos() {
  return <div>hola</div>;
}

function Search() {
  const [searchData, setSearchData] = useState();
  const { parametro } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${parametro}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
      options,
    )
      .then((e) => e.json())
      .then((e) => {
        setSearchData(e.items);
        setLoading(false);
        console.log("Hola");
      });
  }, [parametro]);
  return (
    <div className="search">
      <Header></Header>
      <div className="search-content videos">
        {loading
          ? (
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          )
          : searchData.map((resu, ind) => {
            return (
              <div key={ind} className="items">
                <div className="container-img">
                  <img src={resu.snippet.thumbnails.high.url} alt="error" />
                </div>
                <div className="title">
                  {resu.snippet.title}
                </div>
                <div className="channelTitle">
                  {resu.snippet.channelTitle}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="video/:idVideo" element={<Videos></Videos>}></Route>
      <Route path="search/:parametro" element={<Search></Search>}></Route>
    </Routes>
  );
}
