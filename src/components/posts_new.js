import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                 {...field.input} 
                />
                {field.meta.error}
            </div>
        );

    }

  render() {
      return (
         <form>
             <Field
                label="Title"
                name="title"
                component={this.renderField}
             />
             <Field
                label="Categories"
                name="categories"
                component={this.renderField}
             />
             <Field
                label="Post Content"
                name="content"
                component={this.renderField}
             />
         </form>
      );
  }
}

function validate(values) {

    const errors = {};

    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title which is at least 3 characters long"
    }
    if (!values.categories) {
        errors.categories = "Enter categories"
    }
    if (!values.content) {
        errors.content = "Enter content"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);