import index from '../../images/index.png'
import './welcomePage.css'

function WelcomePage({ isLoggedIn, setIsLoggedIn }) {
    function handleLoggin (){
        setIsLoggedIn(true)
    }

	return (
		<main className="welcomePage_main">
			<div className="content">
				<h1 className="title">
					<span className="titleNu">Nu</span> Kenzie
				</h1>
				<h1 className="slogan">
					Centralize o controle da suas finanças
				</h1>
				<p>de forma rápida e segura</p>
				<button onClick={handleLoggin}>Iniciar</button>
			</div>
			<div className="imgContainer">
				<img src={index} alt="" />
			</div>
		</main>
	);
}

export default WelcomePage