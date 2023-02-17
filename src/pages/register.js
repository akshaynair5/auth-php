import axios from 'axios'

function Register(){
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const displayName = e.target[0].value
        const email = e.target[1].value
        const number = e.target[2].value
        const password = e.target[3].value
        const dataPacket = {
            name:displayName,
            email:email,
            number:number,
            password:password
        }
        axios.post("localhost//php-react/registration.php",dataPacket)
            .then((result)=>{
                console.log(result)
            })
    }
    return(
        <div className="FormBox">
            <form onSubmit={(e)=>HandleSubmit(e)}>
                <input type="text" placeholder="Name" required></input>
                <input type="email" placeholder="Email-ID" required></input>
                <input type="number" placeholder="Mobile Number" required></input>
                <input type="password" placeholder="Password" required></input>
                {/* <label htmlFor="Fl"><img src={ProfilePicIcon} style={{height:'50px',alignSelf:'center'}}></img><p style={{marginLeft:'5%'}}>Add Profile Photo</p></label>
                <input id="Fl" type="file" placeholder="file" style={{display:'none'}} required></input> */}
                <input type="submit" id="S" value="Register"></input>
                {/* {err && <span style={{alignSelf:'center'}}>Something went wrong, Try Again</span>} */}
                {/* <p style={{width:'26%'}}>Have an Account? <b><Link style={{marginLeft:'2%',textDecoration:'none'}} to="/login">Login Now</Link></b></p> */}
            </form>
        </div>
    )
}

export default Register