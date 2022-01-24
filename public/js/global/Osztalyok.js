class Adminelemek {
  constructor(szulo, adat) {
    this.node = szulo;
    szulo.append("<tr></tr>");
    this.elem = this.node.children("tr:last");
    this.adat = adat;
    this.adatMegjelenit();

    this.elem.on("click", () => {
      this.kattintastrigger();
    });
  }

  kattintastrigger() {
    let esemeny = new CustomEvent("kivalaszt", { detail: this });
    window.dispatchEvent(esemeny);
    console.log(esemeny);
  }

  adatMegjelenit() {
    for (const key in this.adat) {
      this.elem.append(`<td>${this.adat[key]}</td>`);
    }

    this.elem.append(`<td><button class="fas fa-ban"></button></td>`);
    this.elem.append(`<td><button class="fas fa-edit"></button></td>`);
  }
}

class AlkalmazottTabla {
  constructor(szulo, adat) {
    this.szulo = szulo;
    szulo.append(
      `<tr>
          <td id='nev'>Név</td>
          <td id='beosztas'>Beosztás</td>
          <td id='lakcim'>Lakcím</td>
          <td id='elerhetoseg'>Elérhetőség</td>
          <td id='email'>E-mail</td>
        </tr>`
    );

    this.adat = adat;
    this.elem = $("tr:last");
    this.elem.children("#nev").text(this.adat.név);
    this.elem.children("#beosztas").text(this.adat.munkakör);
    this.elem.children("#lakcim").text(this.adat.lakcím);
    this.elem.children("#elerhetoseg").text(this.adat.Elérhetőség);
    this.elem.children("#email").text(this.adat.Email);
    this.menu = "#Alkalmazottak .dropdown-content";

    this.elem.on("contextmenu", (e) => {
      this.jobbklikkTrigger();
      document.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
      this.x = e.clientX;
      this.y = e.clientY;
      $(this.menu).css("left", this.x);
      $(this.menu).css("top", this.y);
    });
  }

  jobbklikkTrigger() {
    let esemeny = new CustomEvent("jobbklikk", { detail: this });

    window.dispatchEvent(esemeny); //azért kell, hogy a script.js-ben lássuk
  }
}
class Munkakor {
  constructor(szulo, adat) {
    this.szulo = szulo;
    szulo.append(
      `<div class="munkakor-content">
      <div class="cimsor">
      <div class="circle"><h2>Munkakör első betűje</h2></div>
      <h3>Munkakör megnevezése</h3>
      </div>
      <p>Munkakör leírása</p>`
    );
    this.adat = adat;
    this.elem = $(".circle:last");
    this.elem
      .children("h2")
      .text(this.adat.megnevezés.substring(0, 1).toUpperCase());
    this.szulo
      .children(".munkakor-content:last")
      .children(".cimsor")
      .children("h3")
      .text(this.adat.megnevezés);
    this.szulo
      .children(".munkakor-content:last")
      .children("p")
      .text(this.adat.leírás);
  }
}

class MuszakEloszlas {
  constructor(szulo, adat) {
    this.szulo = szulo;
    szulo.append(
      `<div class="muszaktipusm-content">
        <h3></h3>  
        <table>
            <tr>
              <th>Műszakszám</th>
              <th>Órától</th>
              <th>Óráig</th>
              <th>Szerkesztés</th>
              <th>Törlés</th>
            </tr>
        </table>
    </div>`
    );
    this.adat = adat;
    this.elem = $(".muszaktipusm-content:last");
    this.elem.children("h3").text(this.adat.műszaktipus);
    this.tabla = this.elem.children("table");

    for (const key in this.adat.műszakok) {
      this.tabla.append("<tr></tr>");
      this.tablaElem = this.tabla.children("tbody").children("tr:last");
      this.tablaElem.append(
        "<td>" + this.adat.műszakok[key].műszakszám + "</td>"
      );
      this.tablaElem.append("<td>" + this.adat.műszakok[key].órától + "</td>");
      this.tablaElem.append("<td>" + this.adat.műszakok[key].óráig + "</td>");
      this.tablaElem.append(
        '<td><button class="editmuszakm" ><span class="fas fa-pen"></span></button></td>'
      );
      this.tablaElem.append(
        '<td><button class="removemuszakm"><span class="fas fa-minus"></span></button></td>'
      );
    }

    this.elem.children(".removemuszakm").on("click", () => {
      this.kattintasTrigger("torolm");
    });
    this.elem.children(".editmuszakm").on("click", () => {
      this.kattintasTrigger("modositm");
    });
  }

  kattintasTrigger(gomb) {
    let esemeny = new CustomEvent(gomb, {
      detail: this.adat,
    });
    window.dispatchEvent(esemeny);
  }
}

class MuszakHozzaAdas {
  constructor(szulo, adat) {
    this.szulo = szulo;
    szulo.append(
      `<div class="muszaktipush-content">
      <h2>Műszak típusa</h2><p>Műszaktípus leírása</p>
      <button id="removemuszakh"><span class="fa fa-minus"></span></button>
      <button id="editmuszakh" ><span class="fas fa-pen"></span></button>
      </div>`
    );
    this.adat = adat;
    this.elem = $(".muszaktipush-content:last");
    this.elem.children("h2").text(this.adat.típus);
    this.elem.children("p").text(this.adat.leírás);
    this.elem.children("#removemuszakh").on("click", () => {
      this.kattintasTrigger("torolh");
    });
    this.elem.children("#editmuszakh").on("click", () => {
      this.kattintasTrigger("modosith");
    });
  }

  kattintasTrigger(gomb) {
    let esemeny = new CustomEvent(gomb, {
      detail: this.adat,
    });
    window.dispatchEvent(esemeny);
  }
}

class Muszak {
  constructor(szulo, adat) {
    this.node = szulo;

    szulo.append(
      `<div class="muszaktipusn-content">
      <div class="muszaktipusn-text">
      <h2>Műszak típusa</h2>
      <p>Műszaktípus leírása</p>
      </div>
      <div class="mtc-inline-grid">
      <div class="aktualisnapok"></div>
      <div>
      <button class="send fas fa-plus"></button>  
      <button class="delete fas fa-trash"></button>
      </div> 
      </div>          
      </div>`
    );
    this.elem = this.node.children(".muszaktipusn-content:last");
    this.adat = adat;
    this.napok = [];
    this.elem.children("div").children("p").text(this.adat.leírás);
    this.elem.children("div").children("h2").text(this.adat.típus);
    this.napokTarolo = this.elem
      .children(".mtc-inline-grid")
      .children(".aktualisnapok");
    this.elem.find(".send").on("click", () => {
      this.kattintasTrigger("Hozzarendeles");
    });
    this.elem.find(".delete").on("click", () => {
      this.kattintasTrigger("Torles");
    });
  }
  kattintasTrigger(gomb) {
    let esemeny = new CustomEvent(gomb, {detail: this});
    window.dispatchEvent(esemeny);
  }
}

class Faliujsag{
  constructor(szulo, adat) {
    this.szulo = szulo;
    szulo.append(
      `<div class="post-content">
        <img src="" alt="" />
        <div>
          <h3></h3>              
          <p></p>
          <h4></h4>
          <button id="removefaliujsagm"><span class="fa fa-minus"></span></button>
          <button id="editfaliujsagm" ><span class="fas fa-pen"></span></button>
        </div>
      </div>`
    );
    this.adat = adat;
    this.elem = $(".post-content:last div");
    this.szulo.children("div").children("img").attr("src","/pictures/christopher-campbell-rDEOVtE7vOs-unsplash.jpg");
    this.elem.children("h3").text(this.adat.cím);
    this.elem.children("p").text(this.adat.tartalom);
    this.elem.children("h4").text(this.adat.mikor);
    this.elem.children("#removefaliujsagm").on("click", () => {
      this.kattintasTrigger("torolf");
    });

    this.elem.children("#editfaliujsagm").on("click", () => {
      this.kattintasTrigger("modositf");
    });

  }

  kattintasTrigger(gomb) {
    let esemeny = new CustomEvent(gomb, {detail: this.adat});
    window.dispatchEvent(esemeny);
  }
}

class NapiMin{
  constructor(szulo, adat, datum) {
    this.szulo = szulo;
    this.adat = adat;
    this.muszak = [];
    this.munkakor = [];
    this.datum = datum;
    szulo.append(
      `<div class='napiMin'>
      <h2>datum</h2>
      <table class='tablaLatszik'>
      <tr></tr>
      </table>
    </div>`
    );

    this.tabla = this.szulo.children(".napiMin:last");
    this.tabla.children("h2").html(this.datum);
    this.tablaAdat = this.tabla.children("table").children("tbody");

    for (const elem in adat) {
      if (!this.munkakor.includes(adat[elem].munkakör)) {
        this.munkakor.push(adat[elem].munkakör);
      }
      for (const tombElem in adat[elem]) {
        if (tombElem == "MUSZAKELOSZLAS") {
          for (const kisAdat in adat[elem][tombElem]) {
            const tolIg =
              adat[elem][tombElem][kisAdat].órától +
              " - " +
              adat[elem][tombElem][kisAdat].óráig;
            if (!this.muszak.includes(tolIg)) this.muszak.push(tolIg);
          }
        }
      }
    }
    
    this.tablaAdat.children("tr:last").append("<td></td>");

    this.muszak.forEach((elem) => {
      this.tablaAdat.children("tr:last")
        .append("<td>" + elem + "</td>");
    });

    this.munkakor.forEach((elem) => {
      this.tablaAdat.append("<tr class='"+ elem +"'><td>" + elem + "</td></tr>");
        for (let index = 0; index < this.muszak.length; index++) {
          this.tablaAdat.children("tr:last").append("<td class='" + this.muszak[index] + "'><input type='number' min='0'></td>");
          
        }
          
         
    });

    this.tabla.children("h2").on("click", () => {

      this.tabla.children("table").toggleClass("tablaLatszik");
    });

  }
}

class Alkalmazott extends Adminelemek {
  constructor(szulo, adat) {
    super(szulo, adat);
  }
  adatMegjelenit() {
    for (const key in this.adat) {
      this.elem.append(`<td>${this.adat[key]}</td>`);
    }
    if (!this.adat.hasOwnProperty("munkaviszony_vége")) {
      this.elem.append("<td> - </td>");
    }
    this.elem.append(`<td><button class="fas fa-ban"></button></td>`);
    this.elem.append(`<td><button class="fas fa-user-edit"></button></td>`);
  }
}
class FaliujsagPost extends Adminelemek {}
class MunkakorA extends Adminelemek {}
class Bejelentkezes extends Adminelemek {}
class Muszaktipus extends Adminelemek {}
class Napimunkaeroigeny extends Adminelemek {}
class Napok extends Adminelemek {}
class Beosztas extends Adminelemek {}
class Szabadsag extends Adminelemek {}
class Nemdolgozna extends Adminelemek {}