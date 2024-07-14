import React, { Component } from 'react';

class Complex2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complexNumber1: { real: 3, imaginary: 2 },
      complexNumber2: { real: 1, imaginary: 4 },
      sumReal: 0,
      sumImaginary: 0
    };
  }

  componentDidMount() {
    this.addComplexNumbers();
  }

  addComplexNumbers() {
    const { real: real1, imaginary: imaginary1 } = this.state.complexNumber1;
    const { real: real2, imaginary: imaginary2 } = this.state.complexNumber2;
    
    const sumReal = real1 + real2;
    const sumImaginary = imaginary1 + imaginary2;

    // Using spread operator to update state
    this.setState({
      ...this.state,
      sumReal,
      sumImaginary
    });
  }

  render() {
    const { real, imaginary } = this.state.complexNumber1;
    const { real: real2, imaginary: imaginary2 } = this.state.complexNumber2;
    const { sumReal, sumImaginary } = this.state;

    return (
      <div>
        <h2>Complex Number Addition</h2>
        <p>Complex number 1: {real} + {imaginary}i</p>
        <p>Complex number 2: {real2} + {imaginary2}i</p>
        <p>Sum: {sumReal} + {sumImaginary}i</p>
      </div>
    );
  }
}

export default Complex2