import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDatails(){
  return(
    <MeetupDetail 
      image="https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg"
      title="first"
      address="some5" 
      description="this is the first"
    />
  )
}

export async function getStaticPaths(){
  return {
    fallback:false ,
    paths: [
      { params: {
        meetupId: 'm1',
      }},
    { params: {
      meetupId: 'm2',
    }},
    ]
  }
}

export async function getStaticProps(context){

  const meetupId = context.params.meetupId

  return{
    props:{
      meetupData:{
        id: meetupId,
        image:"https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg",title:"first",
        address:"some5", 
        description:"this is the first"
      }
      
    }
  }
}

export default MeetupDatails