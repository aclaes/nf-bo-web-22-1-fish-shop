const categories = [
  {
    id: "1",
    name: "Süßwasser",
    description: "Bewohner von Binnengewässern",
  },
  {
    id: "2",
    name: "Meerwasser",
    description: "Fühlen sich in Salzwasser wohl",
  },
  {
    id: "3",
    name: "Muscheln",
    description: "Harte Schale, weicher Kern",
  },
  {
    id: "4",
    name: "Korallen und Blumentiere",
    description: "Sehen hübsch aus",
  },
  {
    id: "5",
    name: "Wirbellose",
    description: "Seesterne, Krill und Krebstiere",
  },
];

export function getAllCategories() {
  return categories;
}

export function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}
