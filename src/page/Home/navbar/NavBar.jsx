import "./navbar.scss";




function NavBar({ }) {

    const navBarLista = [
        {
            id: 1,
            imageSVG:
                <span style={{ width: "30px", height: "30px" }}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M15 18H9" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </span>,
            nombre: "Principal"
        },{

            id:2,
            imageSVG:<span style={{ width: "30px", height: "30px" }}>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.67999 11.9101L10.33 12.32L9.38 16.1601C9.16 17.0601 9.59998 17.36 10.36 16.83L15.54 13.2401C16.17 12.8001 16.08 12.2901 15.33 12.1001L13.68 11.6901L14.63 7.85006C14.85 6.95006 14.41 6.65007 13.65 7.18007L8.47 10.7701C7.84 11.2101 7.92999 11.7201 8.67999 11.9101Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>,
            nombre: "Trending"
        },
        {
            id: 3,
            imageSVG: <span style={{ width: "30px", height: "30px" }}>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" opacity="0.4" d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z" />
                    <path fill="white" d="M16 3.75H8C7.59 3.75 7.25 3.41 7.25 3C7.25 2.59 7.59 2.25 8 2.25H16C16.41 2.25 16.75 2.59 16.75 3C16.75 3.41 16.41 3.75 16 3.75Z" />
                    <path fill="white" d="M16 21.75H8C7.59 21.75 7.25 21.41 7.25 21C7.25 20.59 7.59 20.25 8 20.25H16C16.41 20.25 16.75 20.59 16.75 21C16.75 21.41 16.41 21.75 16 21.75Z" />
                    <path fill="white" d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V10C11.25 9.59 11.59 9.25 12 9.25C12.41 9.25 12.75 9.59 12.75 10V14C12.75 14.42 12.41 14.75 12 14.75Z" />
                    <path fill="white" d="M15 14.75C14.59 14.75 14.25 14.41 14.25 14V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V14C15.75 14.42 15.42 14.75 15 14.75Z" />
                    <path fill="white" d="M9 14.75C8.59 14.75 8.25 14.41 8.25 14V13C8.25 12.59 8.59 12.25 9 12.25C9.41 12.25 9.75 12.59 9.75 13V14C9.75 14.42 9.41 14.75 9 14.75Z" />
                </svg>
            </span>,
            nombre: "Ver mas tarde",
        }
    ]

    return (
        <div className="new-nav">
            {navBarLista.map((data) => (
                <div className="new-nav__item" key={data.id}>
                    <span className="new-nav__icon">
                        {data.imageSVG}
                    </span>

                    <span className="new-data__name"> {data.nombre}</span>
                </div>
            ))

            }
        </div>
    )

}

export default NavBar;
