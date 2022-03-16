import { SessionData } from "express-session";
import path from "path";
import { html, HtmlSafeString, LiveViewServer } from "../server";
import { LiveViewRouter } from "../server/component/types";
import { live_flash } from "../server/templates/helpers/live_flash";
import { AsyncFetchLiveViewComponent } from "./asyncfetch/component";
import { AutocompleteLiveViewComponent } from "./autocomplete/component";
import { DecarbonizeLiveView } from "./decarbonize/live_view";
import { LicenseLiveViewComponent } from "./license_liveview";
import { LightLiveViewComponent } from "./light_liveview";
import { SearchLiveViewComponent } from "./live-search/component";
import { PaginateLiveViewComponent } from "./pagination/component";
import { routeDetails } from "./routeDetails";
import { SalesDashboardLiveViewComponent } from "./sales_dashboard_liveview";
import { ServersLiveViewComponent } from "./servers/component";
import { SortLiveViewComponent } from "./sorting/component";
import { VolunteerComponent } from "./volunteers/component";

const lvServer = new LiveViewServer({
  signingSecret: "MY_VERY_SECRET_KEY",
  // port: 3002,
  // rootView: "./examples/rootView.ejs",
  viewsPath: path.join(__dirname, "views"),
  pageTitleDefaults: {
    title: "Examples",
    suffix: " · LiveViewJS",
  },
  liveViewRootTemplate: (session: SessionData, inner_content: HtmlSafeString) => html`
    <main role="main" class="container">
      <p class="alert alert-info" role="alert" phx-click="lv:clear-flash" phx-value-key="info">
        ${live_flash(session.flash, "info")}
      </p>

      <p class="alert alert-danger" role="alert" phx-click="lv:clear-flash" phx-value-key="error">
        ${live_flash(session.flash, "error")}
      </p>

      ${inner_content}
    </main>
  `,
  middleware: [
    // debugging middleware example
    (req, res, next) => {
      console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
      next();
    },
  ],
});

const router: LiveViewRouter = {
  "/light": new LightLiveViewComponent(),
  // sub paths also work
  "/foo/light": new LightLiveViewComponent(),
  "/license": new LicenseLiveViewComponent(),
  "/sales-dashboard": new SalesDashboardLiveViewComponent(),
  "/search": new SearchLiveViewComponent(),
  "/autocomplete": new AutocompleteLiveViewComponent(),
  "/paginate": new PaginateLiveViewComponent(),
  "/sort": new SortLiveViewComponent(),
  "/servers": new ServersLiveViewComponent(),
  "/volunteers": new VolunteerComponent(),
  "/asyncfetch": new AsyncFetchLiveViewComponent(),
  "/decarbonize": new DecarbonizeLiveView(),
};

// register all routes
lvServer.registerLiveViewRoutes(router);

// register single route
// lvServer.registerLiveViewRoute("/volunteers", new VolunteerComponent())

// add your own routes to the express app
lvServer.expressApp.get("/", (req, res) => {
  // this one renders the index of the examples
  res.render("index.html.ejs", {
    routes: routeDetails,
  });
});

// simple example of non-LiveView route not at root
lvServer.expressApp.get("/foo", (req, res) => {
  res.send("Foo!");
});

// start server
lvServer.start();
