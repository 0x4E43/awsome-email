import { CiAt, CiEdit, CiFileOn } from "react-icons/ci";
import SideNav from "../components/sidenav";
import { useState } from "react";
import { client } from "../services/axios";

type EmailAttributes = {
  campaignName: string;
  toAddress?: string;
  subject: string;
  mailType: number;
  mailBody: string;
};

export default function SendEmail() {
  const [emailAttributes, setEmailAttributes] = useState<EmailAttributes>({
    campaignName: "",
    toAddress: "",
    subject: "",
    mailType: +false, //test email
    mailBody: "",
  });

  const [mailBody, setMailBody] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [fileData, setFileData] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(file);
      if (file !== null) {
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            setFileData(reader.result);
          }
        };
        reader.readAsText(file);
      }
    }
  };

  function onTextAreaChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    setMailBody(e.target.value);
  }
  function onFormChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setEmailAttributes({
      ...emailAttributes,
      [e.target.name]: value,
    });
  }

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(selectedFile);
    emailAttributes.mailBody = mailBody;
    emailAttributes.toAddress = fileData;
    console.log("Is test user", emailAttributes);
    //TODO: to handle data validation

    await client.post("/app/email/send", emailAttributes).then(
      (res) => {
        const resp = res.data;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <div className="fixed w-full flex h-screen">
      <div></div>
      <SideNav />

      <div className="flex-1 font-sans ml-5 mt-5 overflow-y-auto">
        <h1 className="text-2xl ml-10 mt-10 text-light">Send Bulk Emails</h1>
        <form action="" className="p-10 space-y-5" onSubmit={onSubmitHandler}>
          <div className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">What is your campaign name?</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Campaign Name"
                name="campaignName"
                onChange={onFormChangeHandler}
                value={emailAttributes.campaignName}
              />
              <CiAt />
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Chose your contact file (CSV)</span>
              <a className="label-text-alt text-blue" href="#">
                Sample File
              </a>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="file"
                className="grow"
                placeholder="Campaign Name"
                name="toAddress"
                onChange={handleFileChange}
                disabled={emailAttributes.mailType == 1 ? true : false}
              />
              <CiFileOn />
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Write email Subject (one line)</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Email subject"
                name="subject"
                onChange={onFormChangeHandler}
                value={emailAttributes.subject}
              />
              <CiEdit />
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Your HTML Email Template</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Email Template"
              name="mailBody"
              onChange={onTextAreaChangeHandler}
              value={mailBody}
            ></textarea>
          </div>
          <div className="flex w-1/5">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                name="mailType"
                onChange={onFormChangeHandler}
                checked={!!emailAttributes.mailType}
              />
              <span className="mx-2">This is a test email</span>
            </label>
          </div>

          <div className="">
            <input
              type="submit"
              className="btn btn-primary"
              name="submit"
              value={"Submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
