const Layout=(props)=>{
    return(
        <>
        <div style={{width:400,height:'auto',backgroundColor:'#d5d5d5'}}>
                <h1>Login Form</h1>
                <button onClick={()=>props.headlertype('login')}>Login</button>
                <button onClick={()=>props.headlertype('signup')}>SignUp</button>
            {props.children}
        </div>
        </>
    )
}
export default Layout;