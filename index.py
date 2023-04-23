import os

from dotenv import load_dotenv
from llama_index import GPTSimpleVectorIndex, QuestionAnswerPrompt, download_loader


load_dotenv()
openai_api_key = os.environ.get('OPENAI_API_KEY')
SimpleWebPageReader = download_loader("SimpleWebPageReader")

loader = SimpleWebPageReader()
documents = loader.load_data(urls=['https://www.ijraset.com/best-journal/application-of-mathematical-in-computer-science'])
index = GPTSimpleVectorIndex(documents)

query_str = "What are the advantages of using mathematics for Computer Science?"


QA_PROMPT_TMPL = (
    "Hello, I have some context information for you:\n"
    "---------------------\n"
    "{context_str}"
    "\n---------------------\n"
    "Based on this context, could you please help me understand the answer to this question: {query_str}?\n"
)
QA_PROMPT = QuestionAnswerPrompt(QA_PROMPT_TMPL)

response = index.query(query_str, text_qa_template=QA_PROMPT)
print(response)

