import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AlertDialog } from "./AlertDialog";
import { triangleFields } from "./HelperVariables";

export class Triangle extends Component {
  state = {
    a: "",
    b: "",
    c: "",
    digits: ""
  };

  handleChange = (e, propertyName) => {
    this.setState({
      [propertyName]: parseFloat(e.target.value)
    });
  };

  getTriangleSquare = (a, b, c, digits) => {
    if (!a || !b || !c || !digits) {
      alert("Не все обязательные поля заполнены");
    } else if (a + b > c && a + c > b && c + b > a) {
      let p = (a + b + c) / 2;
      let result = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(
          digits > 100 ? 100 : digits
      );
      alert(`Площадь треугольника составляет ${result} кв. ед.`);
    } else {
      alert(
        'Проверьте корректность данных для длин сторон ("неравенства треугольника")'
      );
    }
  };

  render() {
    const { a, b, c, digits } = this.state;

    const { handleChange, getTriangleSquare } = this;

    return (
      <form noValidate autoComplete="off">
        <div>
          <h2>
            Для нахождения площади круга укажите его радиус и точность
            вычислений (от 0 до 100)
          </h2>
        </div>
        {triangleFields.map(i => (
          <TextField
            label={i.label}
            value={this.state[i.id]}
            onChange={e => handleChange(e, i.id)}
            error={!this.state[i.id]}
            type={"number"}
            helperText={"Данное поле обязательно для заполнения"}
            margin="normal"
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />
        ))}
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => getTriangleSquare(a, b, c, digits)}
            style={{ marginTop: "1%" }}
          >
            Вычислить (обычный alert)
          </Button>
        </div>
        <div style={{ marginTop: "1%" }}>
          <AlertDialog triangle={this.state} />
        </div>
      </form>
    );
  }
}
