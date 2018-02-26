import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JobCreateModel } from './jobCreate.model';

@Injectable()
export class Validator {
    constructor() { }

    onloadValidator(): { s: string, isValid: boolean, isrequestType: boolean, isTicketNumber: boolean } {
        return { s: '', isValid: true, isrequestType: true, isTicketNumber: true };
    }

    validateForm(jobRenderer: FormGroup, jobCreateModel: JobCreateModel):
    { s: string, isValid: boolean, isrequestType: boolean, isTicketNumber: boolean } {

        if ((jobRenderer.controls['requestTypeOptionsModel'].invalid)) {
            jobCreateModel.setSelectedApplicationOptions([]);
            jobCreateModel.setApplicationOptionsModel([]);
            jobCreateModel.setTicketNumber('');
            jobRenderer.controls['ticketNumber'].disable({ onlySelf: true, emitEvent: false });
            jobRenderer.controls['applicationOptionsModel'].disable({ onlySelf: true, emitEvent: false });
            return { s: 'valid request type', isValid: false, isrequestType: true, isTicketNumber: false };
        } else {
            jobRenderer.controls['ticketNumber'].enable({ onlySelf: true, emitEvent: false });
            if (jobCreateModel.getSelectedRequestTypeOptions().toString() === '1') {
                if ((jobCreateModel.getTicketNumber().substr(0, 3) === 'INC') &&
                    (jobCreateModel.getTicketNumber().length === 10)) {
                    jobRenderer.controls['applicationOptionsModel'].enable({ onlySelf: true, emitEvent: false });
                    return { s: '', isValid: true, isrequestType: false, isTicketNumber: true };
                } else {
                    jobCreateModel.setSelectedApplicationOptions([]);
                    jobRenderer.controls['applicationOptionsModel'].setValue([], { emitEvent: true });
                    jobRenderer.controls['applicationOptionsModel'].disable({ onlySelf: true, emitEvent: false });
                    return { s: 'valid incident number', isValid: false, isrequestType: false, isTicketNumber: true };
                }
            }
            if (jobCreateModel.getSelectedRequestTypeOptions().toString() === '2') {
                if ((jobCreateModel.getTicketNumber().substr(0, 3) === 'CHG') &&
                    (jobCreateModel.getTicketNumber().length === 10)) {
                    jobRenderer.controls['applicationOptionsModel'].enable({ onlySelf: true, emitEvent: false });
                    return { s: '', isValid: true, isrequestType: false, isTicketNumber: true };
                } else {
                    jobCreateModel.setSelectedApplicationOptions([]);
                    jobRenderer.controls['applicationOptionsModel'].setValue([], { emitEvent: true });
                    jobRenderer.controls['applicationOptionsModel'].disable({ onlySelf: true, emitEvent: false });
                    return { s: 'valid change number', isValid: false, isrequestType: false, isTicketNumber: true };
                }
            }
        }

        if ((jobRenderer.controls['ticketNumber'].invalid)) {
            jobCreateModel.setSelectedApplicationOptions([]);
            jobCreateModel.setApplicationOptionsModel([]);
            jobRenderer.controls['applicationOptionsModel'].disable({ onlySelf: true, emitEvent: false });
            return { s: 'valid ticket type', isValid: false, isrequestType: false, isTicketNumber: true };
        }
    }

    validateTicketNumber(jobCreateModel: JobCreateModel): boolean {
        if (jobCreateModel.getSelectedRequestTypeOptions().toString() === '1') {
            if (jobCreateModel.getTicketNumber().toString().startsWith('INC')) {
                jobCreateModel.setIsValidTicketNumber(true);
            } else {
                jobCreateModel.setIsValidTicketNumber(false);
            }
            return jobCreateModel.getIsValidTicketNumber();
        }
        if (jobCreateModel.getSelectedRequestTypeOptions().toString() === '2') {
            if (jobCreateModel.getTicketNumber().toString().startsWith('CHG')) {
                jobCreateModel.setIsValidTicketNumber(true);
            } else {
                jobCreateModel.setIsValidTicketNumber(false);
            }
            return jobCreateModel.getIsValidTicketNumber();
        }
        jobCreateModel.setIsValidTicketNumber(false);
        return jobCreateModel.getIsValidTicketNumber();
    }

}
