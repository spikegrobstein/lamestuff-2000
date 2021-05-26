function validate() {
		errortext = new String("");
		containsat = new Boolean(false);
		if(document.commentForm.formName.value.length<1) {
			errortext = errortext + "Please enter a name...\n";
		}
		if(document.commentForm.formSubject.value.length<1) {
			errortext = errortext + " Please enter a subject...\n";
		}
		if(document.commentForm.formEmail.value.length>1) {
			for(i=0; i<document.commentForm.formEmail.value.length-1; i++) {
				if(document.commentForm.formEmail.value.substring(i) == "@") {
					containsat = true;
				}
			}
		}
		else {ÊÊÊÊ errortext = errortext + " Please enter an email address...\n";
		}
		if(containsat == false) {
			errortext = errortext + "Please enter a valid email address...\n";
		}
		if(errortext>0) {
			alert(errortext);
			return false;
		}
		
		return true;
		
		}
