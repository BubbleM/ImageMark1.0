<div class="layer">
  <img src="${require('../../assets/1.JPG')}">
  <div class="indo"></div>
  <div> this is <%=name%> layer </div>
  <% for (let i = 0; i < arr.length; i++) { %>
    <%= arr[i] %>
  <% } %>
</div>
