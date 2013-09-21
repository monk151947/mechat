<%= publish_to "/messages/new" do %>
  $("#chat").append("<%= j render(@message) %>");
  $("#new_message")[0].reset();
 // $("#chat").animate({ scrollTop: $("#chat").height() }, "slow");
<% end %>

