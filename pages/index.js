import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'1st',
        image:'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg',
        address:'munich',
        description:'this is a first meetup!'
    },
    {
        id:'m2',
        title:'2nd',
        image:'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg',
        address:'munich',
        description:'this is a second meetup!'
    }
]

function HomePage(props){
  return <MeetupList meetups={props.meetups}/>
}

// export async function getServerSideProps(context){
//     const req = context.req
//     const res = context.res

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }


export async function getStaticProps(){
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate:1
    }
}

export default HomePage