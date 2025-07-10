import { Component, useEffect, useState } from "react";
import "./HookPage.css";

// class HookPage extends Component {
//   state = {
//     count: 0,
//   };

//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   componentDidMount = () => {
//     document.title = `Title Change ${this.state.count }`
//   }

//   componentDidUpdate = () => {
//     document.title = `Title Change ${this.state.count }`
//   }

//   componentWillUnmount = () => {
//     document.title = 'ReactJS Hello World'
//   }

//   render() {
//     return (
//       <>
//         <div className="p-hooks">
//           <p>Nilai Saya saat Ini adalah : {this.state.count}</p>
//           <button onClick={this.onUpdate}>Update Nilai</button>
//         </div>
//       </>
//     );
//   }
// }

const HookPage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title Change ${ count }`
        return () => {
            document.title = 'ReactJS Hello World'
        }
    })

    return (
      <>
        <div className="p-hooks">
          <p>Nilai Saya saat Ini adalah : {count}</p>
          <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
      </>
    );
}

export default HookPage;
