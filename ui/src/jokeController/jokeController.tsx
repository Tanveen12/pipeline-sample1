import { FormEvent } from 'react';
import Modal from '../modal'
import "../index.css"
import "./jokeController.css"

export default function JokeController() {
  function submit(event: FormEvent) {
    event.preventDefault();
    console.log('llama')
    // getjokes
  }

  function addJoke(event: FormEvent) {
    event.preventDefault();
  }

  function editJoke(event: FormEvent) {
    event.preventDefault();
  }

  function deleteJoke(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Modal showBackButton={true} >
      <>
        <h2>Joke API</h2>
        <form onSubmit={submit} >
          <ul className="form-list">
            <li className="form-list__row">
              <label>Get Jokes</label>
              <button type="submit" className="button">Get Jokes</button>
            </li>
          </ul>
        </form>
        <form onSubmit={addJoke}>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Add Joke</label>
              <input type="text" name="cc_number" placeholder="your joke here" />
              <button className="button">Add Jokes</button>
            </li>
          </ul>
        </form>
        <form onSubmit={editJoke}>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Edit Joke</label>
              <div className="edit-field">
                <input type="text" name="cc_number" placeholder="uuid" />
                <input type="text" name="cc_number" placeholder="joke" />
              </div>
              <button className="button">Edit Jokes</button>
            </li>
          </ul>
        </form>
        <form onSubmit={deleteJoke}>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Delete Jokes</label>
              <input type="text" name="cc_number" placeholder="uuid" />
              <button className="button">delete Jokes</button>
            </li>
          </ul>
        </form>
      </>
    </Modal >
  )
}