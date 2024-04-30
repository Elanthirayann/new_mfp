import { db } from "../../db"
import { megaFoodPark } from "../../db/schema/food-park"

async function MUAdminPage() {

  const data = await db.select().from(megaFoodPark)

  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </head>
      <body class="container">
        <form>
          <div class="form-group">
            <label for="district">Select the names of the departments in CPC</label>
            <select>
              <option hidden>Select CPC</option>
              {data.map(d => (
                <option value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label for="vacant">Enter the Central facilities in CPC</label>
            <textarea type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="vacant">Enter the Transport facilities details</label>
            <textarea type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="vacant">Select the names of the CC</label>
            <input type="text" class="form-control" id="vacant"/>
          </div>
          <div class="form-group">
            <label for="vacant">Select the Manufacturing Units</label>
            <input type="text" class="form-control" id="vacant" />
          </div>
          <button type="submit" class="btn btn-primary btn-block">Save</button>
        </form>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </html>
  )
}

export default MUAdminPage
