import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AlertDialog } from "./AlertDialog";
import { circleFields } from "./HelperVariables";

export class Circle extends Component {
  state = {
    radius: "",
    digits: ""
  };

  handleChange = (e, propertyName) => {
    this.setState({
      ...this.state,
      [propertyName]: e.target.value
    });
  };

  getCircleSquare = (radius, digits) => {
    if (!radius || !digits) {
      alert("Не все обязательные поля заполнены");
    } else {
      const result = (Math.PI * radius ** 2).toFixed(digits > 100 ? 100 : digits);
      alert(`Площадь круга составляет ${result} кв. ед.`);
    }
  };

  render() {
    const { radius, digits } = this.state;
    const { handleChange, getCircleSquare } = this;

    return (
      <form noValidate autoComplete="off">
        <div>
          <h2>
            Для нахождения площади круга укажите его радиус и точность
            вычислений (от 0 до 100)
          </h2>
        </div>
        <div>
          {circleFields.map(i => (
            <Fragment key={i.id}>
              <TextField
                key={i.id}
                label={i.label}
                value={this.state[i.id]}
                onChange={e => handleChange(e, i.id)}
                type={"number"}
                error={!this.state[i.id]}
                helperText={"Данное поле обязательно для заполнения"}
                margin="normal"
                style={{ marginLeft: "1%", marginRight: "1%" }}
              />
            </Fragment>
          ))}
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => getCircleSquare(radius, digits)}
            style={{ marginTop: "1%" }}
          >
            Вычислить (обычный alert)
          </Button>
        </div>
        <div style={{ marginTop: "1%", marginBottom: "1%" }}>
          <AlertDialog circle={this.state} />
        </div>
      </form>
    );
  }
}
