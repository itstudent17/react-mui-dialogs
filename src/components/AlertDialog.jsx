import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export const AlertDialog = ({ circle, triangle }) => {
  const [open, setOpen] = React.useState(false);

  let heading,
    text = "";
  let p,
    result = 0;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  if (circle) {
    if (!circle.radius || !circle.digits) {
      heading = "Ошибка данных";
      text = "Проверьте заполнение полей числовыми данными";
    } else {
      result = (Math.PI * circle.radius ** 2).toFixed(
          circle.digits > 100 ? 100 : circle.digits
      );
      heading = "Площадь круга составляет";
      text = `${result} кв. ед.`;
    }
  }

  if (triangle) {
    if (!triangle.a || !triangle.b || !triangle.c || !triangle.digits) {
      heading = "Ошибка данных";
      text = "Проверьте заполнение полей";
    } else if (
      triangle.a + triangle.b > triangle.c &&
      triangle.a + triangle.c > triangle.b &&
      triangle.c + triangle.b > triangle.a
    ) {
      p = (triangle.a + triangle.b + triangle.c) / 2;
      result = Math.sqrt(
        p * (p - triangle.a) * (p - triangle.b) * (p - triangle.c)
      ).toFixed(triangle.digits > 100 ? 100 : triangle.digits);
      heading = "Площадь треугольника составляет";
      text = `${result} кв. ед.`;
    } else {
      heading = "Ошибка данных";
      text =
        'Проверьте корректность данных для длин сторон ("неравенства треугольника")';
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Вычислить (диалоговое окно Material UI)
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{heading}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
