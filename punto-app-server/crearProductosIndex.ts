import algoliasearch from "algoliasearch";

const algoliaclient = algoliasearch("D6NJJQ6OET", "09b8482b577109d04b364955b50760c1");
const puntoProductosIndex = algoliaclient.initIndex("puntoProductos");
export default puntoProductosIndex