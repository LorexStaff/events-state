import React, { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 1,
          title: "Business Card — Mon",
          category: "Business Cards",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        },
        {
          id: 2,
          title: "Website — 200",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        },
        {
          id: 3,
          title: "Website — Emi Haze",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        },
        {
          id: 4,
          title: "Website — Codystretch",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        },
        {
          id: 5,
          title: "Business Card — Triangle",
          category: "Business Cards",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        },
        {
          id: 6,
          title: "Website — Place 200×290",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        },
        {
          id: 7,
          title: "Website — 200 (copy)",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        },
        {
          id: 8,
          title: "Business Card — Transmission",
          category: "Business Cards",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        },
        {
          id: 9,
          title: "Website — Place 200×290 #1",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        },
        {
          id: 10,
          title: "Flayer — Place 200×290 #2",
          category: "Flayers",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        },
        {
          id: 11,
          title: "Website — The Ninetys Brand",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        },
        {
          id: 12,
          title: "Business Card — Dia",
          category: "Business Cards",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        },
        {
          id: 13,
          title: "Website — Triangle 350×197",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        },
        {
          id: 14,
          title: "Website — Emi Haze (copy)",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        },
        {
          id: 15,
          title: "Business Card — Transmission (copy)",
          category: "Business Cards",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        },
        {
          id: 16,
          title: "Website — Triangle 350×197 #1",
          category: "Websites",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        },
        {
          id: 17,
          title: "Flayer — Place 200×290 #3",
          category: "Flayers",
          imageUrl:
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        },
      ],
      selectedFilter: "All",
    };
  }

  handleFilterSelect = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  render() {
    const { projects, selectedFilter } = this.state;

    const filters = ["All", ...new Set(projects.map((p) => p.category))];

    const filteredProjects =
      selectedFilter === "All"
        ? projects
        : projects.filter((p) => p.category === selectedFilter);

    return (
      <div>
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleFilterSelect}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;
