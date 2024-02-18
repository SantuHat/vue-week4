// 1.先把元件環境建立好
// 2.把版型加入
// 3.解除版型內的錯誤

export default {
  props: ["pages", "getData"],
  template: `<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" :class="{disabled: !pages.has_pre}">
      <a
        @click.prevent="getData(pages.current_page - 1)"
        class="page-link"
        href="#"
        >Previous</a
      >
    </li>
    <!-- v-for -->
    <li
      class="page-item"
      v-for="page in pages.total_pages"
      :key="page + 55"
      :class="{active: page === pages.current_page}"
    >
      <a @click.prevent="getData(page)" class="page-link" href="#"
        >{{ page }}</a
      >
    </li>
    <li class="page-item" :class="{disabled: pages.current_page === pages.total_pages}">
      <a
        @click.prevent="getData(pages.current_page + 1)"
        class="page-link"
        href="#"
        >Next</a
      >
    </li>
  </ul>
</nav>`,
};
