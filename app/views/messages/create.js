<%= publish_to "/messages/new" do %>
  $("#chat").prepend("<%= j render(@message) %>");
  $("#new_message")[0].reset();
  $("#chat").animate({ scrollTop: $("#chat").height() }, "fast");
<% end %>

