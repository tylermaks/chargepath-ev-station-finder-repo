import MainNav from './MainNav'

function Hero(){
    return ( 
        <div id='hero' className='container'>
            <MainNav />
            <div className='hero--content flex--space'>
                <h1 className='header'>Hello World!</h1>
                <div>
                    <p>This is an image</p>
                </div>
            </div>
            
        </div>

    )
}

export default Hero