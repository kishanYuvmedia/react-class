import WebNev from "./webNev";
import WebFooter from "./webfooter";
const WebsiteLayout=(props)=>{
    return(
        <>
        <WebNev/>
        {props.children}
        <WebFooter/>
        </>
    )
}
export default WebsiteLayout;