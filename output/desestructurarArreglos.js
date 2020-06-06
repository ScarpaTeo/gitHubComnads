"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var persona = ['teo', 26, 'desarrollador'];
var persona2 = ['juan', 36, 'PO']; //desestructurar significa convertir los valores del arreglo a variables

var nombre = persona[0],
    edad = persona[1],
    profesion = persona[2],
    _persona$ = persona[3],
    pais = _persona$ === void 0 ? 'no esp' : _persona$; //console.log(nombre,edad,profesion);

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : item,
      _ref2 = _slicedToArray(_ref, 3),
      nom = _ref2[0],
      ed = _ref2[1],
      pa = _ref2[2];

  console.log(nom, ed, pa);
};

var mostrar = function mostrar() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : item,
      _ref4 = _slicedToArray(_ref3, 3),
      a = _ref4[0],
      b = _ref4[1],
      c = _ref4[2];

  return console.log(a, b, c);
};

mostrarInfo(persona2);
mostrar(persona);