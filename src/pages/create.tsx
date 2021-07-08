import { wrapper } from './create.css'

export const Create = () => {
  return <div className={wrapper}>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>

      <div>
        <label>Questions:</label>
        <input type="text" />
      </div>

      <button>Add more</button>
    </form>
  </div>
}
