import React, { Component } from "react";
import UploadService from "../../services/upload-files.service";
import FileViewer from 'react-file-viewer';
import { Button,FileUploaderDropContainer,Breadcrumb,BreadcrumbItem,InlineLoading } from 'carbon-components-react';
import ResultsList from './ResultsList'
import { WarningFilled16 } from '@carbon/icons-react';

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "Please Upload Your Document",
      results: [],
      docUrls: [ { fileData: '' } ],
      fileInfos: [],
      docUrl: undefined,
      docStatus: "Begin"
    };
  }

  selectFile(event) {
    //console.log(event.target.files)
    let thepage = this.props.page
    /*this.setState({
      selectedFiles: event.target.files,
    });*/
    let currentFile = event.target.files[0];
    UploadService.upload(currentFile,thepage, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    }).then((response) => {
        console.log(response.data.transactionalId);
        var getImagePath = URL.createObjectURL(currentFile);
        console.log(getImagePath);
        this.setState({
            transactionalId: response.data.transactionalId,
            message: "Uploaded Document",
            docUrl: "/api/documentunderstanding/getdoc/" + response.data.transactionalId+ "/pdf",
            selectedFiles: event.target.files
        })
      })





  }

  upload() {
    let currentFile = this.state.selectedFiles[0];
    let application = this.props.application
    let workflow = this.props.workflow
    let rules = this.props.rules
    console.log("upload" + this.state.transactionalId);
    this.setState({
      docStatus: "Processing",
    });
    UploadService.executeRules(this.state.transactionalId,application,workflow,rules,(event) =>{
        this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    }).then((response)=>{
      console.log(response.data)

      this.setState({
        results: response.data.values,
        message: "Document Processed",
        transactionId: response.data.transactionalId,
        docStatus: "Done"
      });
      console.log(this.state);
      return "stuff"
    })

    this.setState({
      selectedFiles: undefined,
    });
  }



  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
    } = this.state;

    return (
  <div>

  <div class="bx--grid--full-width">
    <div class="bx--row">
      <div class="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
      <Breadcrumb aria-label="Page navigation">
        <BreadcrumbItem>
          <a href="/">{this.props.workflow}:{this.props.page}:{this.props.application}:{this.props.rules}</a>
          </BreadcrumbItem>
          </Breadcrumb>
        <h1 className="landing-page__heading">{this.state.message}</h1>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
        <FileUploaderDropContainer
          accept={[
            '.jpg',
            '.pdf'
          ]}
          onAddFiles={this.selectFile}
          buttonKind="primary"
          buttonLabel="Add files"
          filenameStatus="edit"
          iconDescription="Clear file"
          labelText="Add File to this container"
          class="fileuploader-dcap"
          ></FileUploaderDropContainer>

      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
       <Button disabled={!selectedFiles} onClick={this.upload} >
         Process Document
         </Button>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col-lg-12 bx--col-md-6 bx--col-sm-1">
        {this.state.docStatus=="Processing" &&
          <InlineLoading description="Processing..." />
        }
        {this.state.message=="Document Processed" &&

          <ResultsList results={this.state.results} />

        }
      </div>
      <div class="bx--col-lg-4 bx--col-md-2 bx--col-sm-1">
      {this.state.docUrl != undefined  &&
        <div>

       <FileViewer fileType="pdf" filePath={this.state.docUrl} />
       </div>
      }
      </div>


    </div>
  </div>







      </div>
    );
  }
}
