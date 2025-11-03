const Heading=(props)=>{
    return(
        <div>
        {props.type==='h1' &&
          <h1>{props.children}</h1>
        }
         {props.type==='h2' &&
          <h2>{props.children}</h2>
        }
         {props.type==='h3' &&
          <h3>{props.children}</h3>
        }
         {props.type==='h4' &&
          <h4>{props.children}</h4>
        }
         {props.type==='h5' &&
          <h5>{props.children}</h5>
        }
        </div>
    )
}
export default Heading