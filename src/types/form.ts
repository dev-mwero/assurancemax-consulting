export type FormState = "idle" | "loading" | "success" | "error";

export type ContactFormData = {
	name: string;
	email: string;
	phone?: string;
	organization?: string;
	service?: string;
	message: string;
};

export type InquiryFormData = {
	name: string;
	email: string;
	organization?: string;
	serviceInterest: string;
	preferredContact: "email" | "phone" | "either";
	message: string;
};

export type NewsletterFormData = {
	email: string;
};
