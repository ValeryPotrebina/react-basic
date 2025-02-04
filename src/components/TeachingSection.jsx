import {ways} from '../data'
import WayToTeach from "./WayToTeach.jsx"

export default function TeachingSection() {
    return (
        <section>
                  <h3>Наш поход к обучению</h3>
                  <ul>
                    {ways.map((way) => <WayToTeach key={way.title} {... way}/>)}
                    {/* <WayToTeach {... ways[0]}/>
                    <WayToTeach {... ways[1]}/>
                    <WayToTeach {... ways[2]}/>
                    <WayToTeach {... ways[3]}/> */}
                    {/* <WayToTeach title={ways[3].title} description={ways[3].description}/> */}
                  </ul>
                </section>
    )
}