import Quote from "./Quote.js";
import { setLayout } from "../utils/render.js";

let page = document.querySelector("#page");

const HomePage = () => {    
  setLayout("GIC : Home","Game Items Collection","Home Page","My footer");
  page.innerHTML = `<div id="quote"></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tristique mauris, sit amet rhoncus metus. Aenean cursus, nulla sit amet molestie semper, risus libero facilisis lectus, sed malesuada diam massa tristique lectus. Cras posuere eget odio in tincidunt. Aenean rutrum commodo felis id eleifend. Ut imperdiet dapibus diam vel consequat. Integer imperdiet facilisis interdum. Vivamus aliquam turpis metus, id viverra purus dictum nec. Integer et finibus tellus. Quisque tempus porttitor vestibulum. Vivamus finibus dictum tempus. Phasellus non nibh semper, tincidunt ante quis, euismod purus.

  Quisque ac odio tincidunt, volutpat felis sed, tempus augue. Quisque malesuada mollis ultrices. Vestibulum efficitur vitae leo at congue. Aliquam dictum purus felis. Sed vitae posuere mi. Aenean ut lacinia ante, a imperdiet ipsum. Pellentesque sit amet turpis varius, volutpat nulla eget, elementum orci. Praesent auctor quis libero ut varius. Praesent iaculis purus at nibh posuere, vel pharetra lorem interdum. Maecenas sit amet commodo lorem, nec lobortis velit. Mauris eget tristique ligula, eget ultricies diam. Suspendisse gravida quis lectus ultrices fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vitae odio dapibus, viverra odio id, rhoncus lacus. Quisque nec volutpat ex.
  
  Phasellus fermentum purus ut tortor semper, gravida fermentum diam accumsan. Etiam vel pulvinar felis. Pellentesque a est velit. Suspendisse laoreet, velit vel tincidunt pretium, sem metus egestas turpis, lobortis gravida sapien ex in nunc. Duis malesuada molestie mi at tristique. Mauris volutpat ex et elementum volutpat. Suspendisse suscipit, felis sit amet semper consequat, velit augue viverra tellus, non interdum lectus magna nec nibh. Morbi ut nisl vitae tellus ultrices pellentesque.
  
  Aenean lectus mauris, semper et nunc eu, hendrerit malesuada neque. Vestibulum malesuada justo sit amet nulla porta viverra. Quisque auctor ultrices mi, nec rutrum odio venenatis sit amet. Morbi et elit tincidunt, aliquam felis tincidunt, eleifend metus. Suspendisse laoreet tortor ut lorem varius lacinia. Sed nec mi sed libero lacinia rutrum. Donec dapibus mollis urna eget molestie. Donec non metus ac eros elementum consectetur. Nullam sollicitudin nisl sed leo consequat, quis sollicitudin lectus sodales. Morbi scelerisque, ipsum nec ultricies iaculis, erat augue venenatis nisl, auctor consequat velit lorem eget nunc. Nam eget faucibus neque, eu malesuada massa. Nullam eget magna at dui tincidunt sagittis. Etiam malesuada ac est non lacinia.
  
  Proin eget elit in magna vulputate tempor. Aliquam in suscipit purus. Maecenas congue tincidunt orci, eu fermentum mauris faucibus in. Aenean auctor viverra urna quis varius. Aenean posuere eu magna ac dictum. Praesent vitae dui sed diam tincidunt posuere vel semper mauris. Pellentesque interdum libero in posuere placerat. Nam auctor, diam convallis ornare placerat, leo sem scelerisque mauris, aliquam fermentum ipsum lorem sed lorem. Maecenas nibh sem, ultrices finibus bibendum id, aliquam ac urna. Sed justo erat, rutrum at lectus vitae, iaculis varius tellus. Curabitur non lorem non libero luctus interdum et nec ligula. Sed dignissim orci vel vulputate mollis. Donec eget leo semper, sodales lorem id, luctus augue. In sapien neque, porta non sem et, tempus semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tristique mauris, sit amet rhoncus metus. Aenean cursus, nulla sit amet molestie semper, risus libero facilisis lectus, sed malesuada diam massa tristique lectus. Cras posuere eget odio in tincidunt. Aenean rutrum commodo felis id eleifend. Ut imperdiet dapibus diam vel consequat. Integer imperdiet facilisis interdum. Vivamus aliquam turpis metus, id viverra purus dictum nec. Integer et finibus tellus. Quisque tempus porttitor vestibulum. Vivamus finibus dictum tempus. Phasellus non nibh semper, tincidunt ante quis, euismod purus.

  Quisque ac odio tincidunt, volutpat felis sed, tempus augue. Quisque malesuada mollis ultrices. Vestibulum efficitur vitae leo at congue. Aliquam dictum purus felis. Sed vitae posuere mi. Aenean ut lacinia ante, a imperdiet ipsum. Pellentesque sit amet turpis varius, volutpat nulla eget, elementum orci. Praesent auctor quis libero ut varius. Praesent iaculis purus at nibh posuere, vel pharetra lorem interdum. Maecenas sit amet commodo lorem, nec lobortis velit. Mauris eget tristique ligula, eget ultricies diam. Suspendisse gravida quis lectus ultrices fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vitae odio dapibus, viverra odio id, rhoncus lacus. Quisque nec volutpat ex.
  
  Phasellus fermentum purus ut tortor semper, gravida fermentum diam accumsan. Etiam vel pulvinar felis. Pellentesque a est velit. Suspendisse laoreet, velit vel tincidunt pretium, sem metus egestas turpis, lobortis gravida sapien ex in nunc. Duis malesuada molestie mi at tristique. Mauris volutpat ex et elementum volutpat. Suspendisse suscipit, felis sit amet semper consequat, velit augue viverra tellus, non interdum lectus magna nec nibh. Morbi ut nisl vitae tellus ultrices pellentesque.
  
  Aenean lectus mauris, semper et nunc eu, hendrerit malesuada neque. Vestibulum malesuada justo sit amet nulla porta viverra. Quisque auctor ultrices mi, nec rutrum odio venenatis sit amet. Morbi et elit tincidunt, aliquam felis tincidunt, eleifend metus. Suspendisse laoreet tortor ut lorem varius lacinia. Sed nec mi sed libero lacinia rutrum. Donec dapibus mollis urna eget molestie. Donec non metus ac eros elementum consectetur. Nullam sollicitudin nisl sed leo consequat, quis sollicitudin lectus sodales. Morbi scelerisque, ipsum nec ultricies iaculis, erat augue venenatis nisl, auctor consequat velit lorem eget nunc. Nam eget faucibus neque, eu malesuada massa. Nullam eget magna at dui tincidunt sagittis. Etiam malesuada ac est non lacinia.
  
  Proin eget elit in magna vulputate tempor. Aliquam in suscipit purus. Maecenas congue tincidunt orci, eu fermentum mauris faucibus in. Aenean auctor viverra urna quis varius. Aenean posuere eu magna ac dictum. Praesent vitae dui sed diam tincidunt posuere vel semper mauris. Pellentesque interdum libero in posuere placerat. Nam auctor, diam convallis ornare placerat, leo sem scelerisque mauris, aliquam fermentum ipsum lorem sed lorem. Maecenas nibh sem, ultrices finibus bibendum id, aliquam ac urna. Sed justo erat, rutrum at lectus vitae, iaculis varius tellus. Curabitur non lorem non libero luctus interdum et nec ligula. Sed dignissim orci vel vulputate mollis. Donec eget leo semper, sodales lorem id, luctus augue. In sapien neque, porta non sem et, tempus semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tristique mauris, sit amet rhoncus metus. Aenean cursus, nulla sit amet molestie semper, risus libero facilisis lectus, sed malesuada diam massa tristique lectus. Cras posuere eget odio in tincidunt. Aenean rutrum commodo felis id eleifend. Ut imperdiet dapibus diam vel consequat. Integer imperdiet facilisis interdum. Vivamus aliquam turpis metus, id viverra purus dictum nec. Integer et finibus tellus. Quisque tempus porttitor vestibulum. Vivamus finibus dictum tempus. Phasellus non nibh semper, tincidunt ante quis, euismod purus.

  Quisque ac odio tincidunt, volutpat felis sed, tempus augue. Quisque malesuada mollis ultrices. Vestibulum efficitur vitae leo at congue. Aliquam dictum purus felis. Sed vitae posuere mi. Aenean ut lacinia ante, a imperdiet ipsum. Pellentesque sit amet turpis varius, volutpat nulla eget, elementum orci. Praesent auctor quis libero ut varius. Praesent iaculis purus at nibh posuere, vel pharetra lorem interdum. Maecenas sit amet commodo lorem, nec lobortis velit. Mauris eget tristique ligula, eget ultricies diam. Suspendisse gravida quis lectus ultrices fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vitae odio dapibus, viverra odio id, rhoncus lacus. Quisque nec volutpat ex.
  
  Phasellus fermentum purus ut tortor semper, gravida fermentum diam accumsan. Etiam vel pulvinar felis. Pellentesque a est velit. Suspendisse laoreet, velit vel tincidunt pretium, sem metus egestas turpis, lobortis gravida sapien ex in nunc. Duis malesuada molestie mi at tristique. Mauris volutpat ex et elementum volutpat. Suspendisse suscipit, felis sit amet semper consequat, velit augue viverra tellus, non interdum lectus magna nec nibh. Morbi ut nisl vitae tellus ultrices pellentesque.
  
  Aenean lectus mauris, semper et nunc eu, hendrerit malesuada neque. Vestibulum malesuada justo sit amet nulla porta viverra. Quisque auctor ultrices mi, nec rutrum odio venenatis sit amet. Morbi et elit tincidunt, aliquam felis tincidunt, eleifend metus. Suspendisse laoreet tortor ut lorem varius lacinia. Sed nec mi sed libero lacinia rutrum. Donec dapibus mollis urna eget molestie. Donec non metus ac eros elementum consectetur. Nullam sollicitudin nisl sed leo consequat, quis sollicitudin lectus sodales. Morbi scelerisque, ipsum nec ultricies iaculis, erat augue venenatis nisl, auctor consequat velit lorem eget nunc. Nam eget faucibus neque, eu malesuada massa. Nullam eget magna at dui tincidunt sagittis. Etiam malesuada ac est non lacinia.
  
  Proin eget elit in magna vulputate tempor. Aliquam in suscipit purus. Maecenas congue tincidunt orci, eu fermentum mauris faucibus in. Aenean auctor viverra urna quis varius. Aenean posuere eu magna ac dictum. Praesent vitae dui sed diam tincidunt posuere vel semper mauris. Pellentesque interdum libero in posuere placerat. Nam auctor, diam convallis ornare placerat, leo sem scelerisque mauris, aliquam fermentum ipsum lorem sed lorem. Maecenas nibh sem, ultrices finibus bibendum id, aliquam ac urna. Sed justo erat, rutrum at lectus vitae, iaculis varius tellus. Curabitur non lorem non libero luctus interdum et nec ligula. Sed dignissim orci vel vulputate mollis. Donec eget leo semper, sodales lorem id, luctus augue. In sapien neque, porta non sem et, tempus semper lectus.</p>`;
  Quote(); 
};

export default HomePage;
