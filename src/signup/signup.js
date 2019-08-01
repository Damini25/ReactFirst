import React from 'react';
import './signup.css';
import DynamicInput from '../common/dynamicForm/input';

class SignUpcomponent extends React.Component {
    state = {
        formIsValid:false,
        signUpForm: [{
            label: 'Full Name',
            name: 'name',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter full name',
            },
            value: '',
            validation: {
                required: true,
                minLength: 3,
                maxLength: 6
            },
            valid: false,
            touched:false
        },
        {
            label: 'Email',
            name: 'email',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter  email',
            },
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLength: 6
            },
            valid: false,
            touched:false
        }, {
            label: 'Gender',
            name: 'gender',
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'male', displayValue: 'Male' },
                    { value: 'female', displayValue: 'Female' }
                ]
            },
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLength: 6
            },
            valid: true,
            touched:false
        }, {
            label: 'Address',
            name: 'address',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter address',
            },
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLength: 6
            },
            valid: false,
            touched:false
        },
        {
            label: 'Password',
            name: 'password',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter new Password',
            },
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLength: 6
            },
            valid: false,
            touched:false
        }, {
            label: 'Confirm Password',
            name: 'confirmPassword',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Confirm your password',
            },
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLength: 6
            },
            valid: false,
            touched:false
        }]
    }

    checkValidity = (value, rule) => {
        console.log(value.length, rule['maxLength'], value.length >= rule['minLength'])
        let isValid = true;
        if (rule['required']) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rule['minLength']) {

            isValid = value.length >= rule['minLength'] && isValid;
        }
        if (rule['maxLength']) {
            isValid = value.length <= rule['maxLength'] && isValid;
        }
        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedSignUpForm = [...this.state.signUpForm];
        let formValid=true;
        updatedSignUpForm.map((elem, i) => {
            const updatedFormElement = { ...elem };
            if (elem['name'] === inputIdentifier) {
                updatedFormElement['value'] = event.target.value;
                updatedFormElement['touched'] = true;
                updatedFormElement['valid'] = this.checkValidity(event.target.value, elem['validation']);
                elem = { ...updatedFormElement };
                updatedSignUpForm[i] = elem;
                console.log(updatedSignUpForm);
            }
            formValid=elem['valid'] && formValid;
        });
         console.log(formValid);
        this.setState({ signUpForm: updatedSignUpForm ,formIsValid:formValid});
    }

    submitSignupForm = (event) => {
        event.preventDefault();
        const formData = {};
        this.state.signUpForm.map((key) => {
            formData[key['name']] = key['value'];
        });
        console.log('formsubmit', formData)
    }
    render() {
        return (
            <div className="parent-div">
                <form onSubmit={this.submitSignupForm} >
                    {this.state.signUpForm.map((element) => {
                        const activeClass = (!element['valid']) && element['touched'] ? 'invalid' : 'valid';
                        return (
                            <DynamicInput key={element.name} class={activeClass} inputType={element.elementType}
                                elementConfig={element['elementConfig']}
                                changed={(event) => this.inputChangeHandler(event, element.name)}
                                elementValue={element.value} label={element.label}>
                            </DynamicInput>
                        )
                    })}
                    <button type="submit" disabled={!this.state.signUpForm.formIsValid}>Submit</button>
                </form>
                {/* <div>
                    <label>Full Name</label>
                    <input />
                </div>
                <div>
                    <label>Email</label>
                    <input />
                </div>
                <div>
                    <label>Password</label>
                    <input />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input />
                </div>
                <div><button>Signup</button></div> */}
            </div>
        );
    }
}
export default SignUpcomponent;