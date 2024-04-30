import { db } from "../../db"
import { district } from "../../db/schema/district"

async function MinistryDashboard() {

  const districts = await db.select().from(district)

  return (
    <html>
      <head>
        <script src="https://unpkg.com/htmx.org@1.9.12"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <main class="container">
          <nav class="navbar">
            <h1 class="navbar-brand">MOFPI Admin Dashboard</h1>
          </nav>
          <form hx-post="/api/create-mfp" hx-swap="beforeend">
            <div class="mfp-details">
              <h2>MFP Details</h2>

              <div class="form-group">
                <label for="mfp_name">MFP Name</label>
                <input type="text" name="name" id="name" placeholder="Enter MFP Name" />
              </div>

              <div class="form-group">
                <label for="district">District</label>
                <select>
                  <option>Select District</option>
                  {districts.map(d => (
                    <option value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div class="form-group">
                <label for="state">State</label>
                <select disabled>
                  <option value={1}>Tamil Nadu</option>
                </select>
              </div>

              <div class="form-group">
                <label for="land">Total Land Area</label>
                <input type="number" name="land" id="land" placeholder="Total Land Area" />
              </div>

              <div class="form-group">
                <label for="leasable">Total Leasable Area</label>
                <input type="number" name="leasable" id="leasable" placeholder="Total Leasable Area" />
              </div>

              <div class="form-group">
                <label for="vacant">Total Vacant Area</label>
                <input type="number" name="vacant" id="vacant" placeholder="Total Vacant Area" />
              </div>
            </div>
            <button type="submit" class="border px-2 py-1 rounded">Save</button>
            <a class="border px-2 py-1 rounded" href="/view/foodparks">View</a>
          </form>
        </main>
      </body>
    </html>
  )
}

export default MinistryDashboard
